import React from "react";
import ReactDOM from "react-dom";
//import ImageUploader from "react-images-upload";
import ImageUploading from 'react-images-uploading';
import Dropzone from "react-dropzone";



export default function UplodeImages() {
  const [state, setState] = React.useState({
    pictures: []
  });

  const onDrop = picture => {
    setState({
      pictures: state.pictures.concat(
        picture
      ) /* state.pictures.concat(picture) */
    });
  };

  return (
    <div className="UplodeImages">
      <h1>Hello CodeSandbox</h1>
      {/* <ImageUploader
        withIcon={true}
        buttonText="Choose images"
        onChange={onDrop}
        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
        maxFileSize={5242880}
      /> */}
    </div>
  );
}


