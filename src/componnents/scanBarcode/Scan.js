import React, { useState, useRef } from 'react';
import Scanner from './Scanner';
import Result from './Result';

const Scan = () => {
    const [scanning, setScanning] = useState(false);
    const [results, setResults] = useState([]);
    const scannerRef = useRef(null);
    const functocheach=()=>{
    if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
        console.log("enumerateDevices() not supported.");
        return;
      }
      
      // List cameras and microphones.
      
      navigator.mediaDevices.enumerateDevices()
      .then(function(devices) {
        devices.forEach(function(device) {
          console.log(device.kind + ": " + device.label +
                      " id = " + device.deviceId);
        });
      })
      .catch(function(err) {
        console.log(err.name + ": " + err.message);
      });
    }
    return (
        <div>
            <button onClick={() =>{ functocheach();setScanning(!scanning) }}>{scanning ? 'Stop' : 'Start'}</button>
            <ul className="results">
                {results.map((result) => (result.codeResult && <Result key={result.codeResult.code} result={result} />))}
            </ul>
            <div ref={scannerRef} style={{position: 'relative', border: '3px solid red', height: '500%',
                    width: '50%'}}>
                {/* <video style={{ width: window.innerWidth, height: 480, border: '3px solid orange' }}/> */}
                <canvas className="drawingBuffer" style={{
                    position: 'absolute',
                    top: '0px',
                    left: '0px',
                    height: '100%',
                    width: '100%',
                    border: '3px solid green',
                }}  />
                {scanning ? <Scanner scannerRef={scannerRef} onDetected={(result) => setResults([...results, result])} /> : null}
            </div>
        </div>
    );
};

export default Scan;
