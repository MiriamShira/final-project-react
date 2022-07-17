import React, { useCallback, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import Quagga from '@ericblade/quagga2';

function getMedian(arr) {
    console.log(arr)
    arr.sort((a, b) => a - b);
    const half = Math.floor(arr.length / 2);
    if (arr.length % 2 === 1) {
        return arr[half];
    }
    return (arr[half - 1] + arr[half]) / 2;
}

function getMedianOfCodeErrors(decodedCodes) {
    console.log(decodedCodes)
    const errors = decodedCodes.filter(x => x.error !== undefined).map(x => x.error);
    const medianOfErrors = getMedian(errors);
    return medianOfErrors;
}

const defaultConstraints = {
    width: 140,
    height: 180,
};

const defaultLocatorSettings = {
    patchSize: 'small',
    halfSample: true,

        debug: {
          showCanvas: false,
          showPatches: false,
          showFoundPatches: false,
          showSkeleton: false,
          showLabels: false,
          showPatchLabels: false,
          showRemainingPatchLabels: false,
          boxFromPatches: {
            showTransformed: false,
            showTransformedBox: false,
            showBB: false
          }
        }
      
};

const defaultDecoders = ['ean_reader'];
const tmphp='a63f0788de18ccab7ed2d6f4e92af916c623ee2c121b6efbf7d6d24dd955377a'
const Scanner = ({
    onDetected,
    scannerRef,
    onScannerReady,
    cameraId,
    facingMode,
    constraints = defaultConstraints,
    locator = defaultLocatorSettings,
    numOfWorkers = navigator.hardwareConcurrency || 0,
    decoders = defaultDecoders,
    locate = true,
}) => {

    const errorCheck = useCallback((result) => {
        if (!onDetected) {
            return;
        }
        const err = getMedianOfCodeErrors(result.codeResult.decodedCodes);
        // if Quagga is at least 75% certain that it read correctly, then accept the code.
        if (err < 0.25) {
            onDetected(result.codeResult.code);
        }
    }, [onDetected]);

    const handleProcessed = (result) => {
        const drawingCtx = Quagga.canvas.ctx.overlay;
        const drawingCanvas = Quagga.canvas.dom.overlay;
        drawingCtx.font = "24px Arial";
        drawingCtx.fillStyle = 'green';

        if (result) {
            
            if (result.boxes) {
                drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute('width')), parseInt(drawingCanvas.getAttribute('height')));
                result.boxes.filter((box) => box !== result.box).forEach((box) => {
                    Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, { color: 'purple', lineWidth: 2 });
                });
            }
            if (result.box) {
                Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, { color: 'blue', lineWidth: 2 });
            }
            if (result.codeResult && result.codeResult.code) {
                // const validated = barcodeValidator(result.codeResult.code);
                // const validated = validateBarcode(result.codeResult.code);
                // Quagga.ImageDebug.drawPath(result.line, { x: 'x', y: 'y' }, drawingCtx, { color: validated ? 'green' : 'red', lineWidth: 3 });
                drawingCtx.font = "24px Arial";
                // drawingCtx.fillStyle = validated ? 'green' : 'red';
                // drawingCtx.fillText(`${result.codeResult.code} valid: ${validated}`, 10, 50);
                drawingCtx.fillText(result.codeResult.code, 10, 20);
                // if (validated) {
                //     onDetected(result);
                // }
            }
        }
    };

    useLayoutEffect(() => {
        Quagga.init({
            inputStream: {
              
                size: 800 , // restrict input-size to be 800px in width (long-side)
                
                type: 'LiveStream',
            
                constraints: {
                    ...constraints,
                
                    ...(cameraId && { deviceId: cameraId }),
                    ...(!cameraId && { facingMode }),
                },
                target: scannerRef.current,
                area: { // defines rectangle of the detection/localization area
                    top: "0%",    // top offset
                    right: "0%",  // right offset
                    left: "0%",   // left offset
                    bottom: "0%"  // bottom offset
                  },
                  singleChannel: true,
            },
            locator,
            numOfWorkers,
            decoder: { readers: decoders },
            locate:true,
        }, (err) => {
            console.log(constraints)
            debugger
            Quagga.onProcessed(handleProcessed);

            if (err) {
                return console.log('Error starting Quagga:', err);
            }
            if (scannerRef && scannerRef.current) {
             
                console.log("scannerRef",scannerRef)
                Quagga.start();
                if (onScannerReady) {
                    console.log(onScannerReady,"onScannerReady")
                    onScannerReady();
                }
            }
        });
        Quagga.onDetected(errorCheck);
        return () => {
            Quagga.offDetected(errorCheck);
            Quagga.offProcessed(handleProcessed);
            Quagga.stop();
        };
    }, [cameraId, onDetected, onScannerReady, scannerRef, errorCheck, constraints, locator, decoders, locate]);
    return null;
}

Scanner.propTypes = {
    onDetected: PropTypes.func.isRequired,
    scannerRef: PropTypes.object.isRequired,
    onScannerReady: PropTypes.func,
    cameraId: PropTypes.string,
    facingMode: PropTypes.string,
    constraints: PropTypes.object,
    locator: PropTypes.object,
    numOfWorkers: PropTypes.number,
    decoders: PropTypes.array,
    locate: PropTypes.bool,
};

export default Scanner;
