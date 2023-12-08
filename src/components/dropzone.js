import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Draggable from 'react-draggable';
import './DropzoneComponent.css';

const DropzoneComponent = () => {
  const [files, setFiles] = useState([]);
  const [customText, setCustomText] = useState('');
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  const [textOverlayPosition, setTextOverlayPosition] = useState({ x: 0, y: 0 });

  const onDrop = useCallback((acceptedFiles) => {
    const image = new Image();
    image.src = URL.createObjectURL(acceptedFiles[0]);

    image.onload = () => {
      setImageDimensions({ width: image.width, height: image.height });
    };

    setFiles(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const removeFile = () => {
    setFiles([]);
    setImageDimensions({ width: 0, height: 0 });
    setCustomText('');
  };

  const handleCustomTextChange = (e) => {
    setCustomText(e.target.value);
  };

  const handleDrag = (e, data) => {
    setTextOverlayPosition({ x: data.x, y: data.y });
  };

  const handleDownloadClick = () => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    canvas.width = imageDimensions.width;
    canvas.height = imageDimensions.height;

    const image = new Image();
    image.src = URL.createObjectURL(files[0]);

    image.onload = () => {
      context.drawImage(image, 0, 0, image.width, image.height);

      // Draw the text overlay at the final position
      context.font = 'bold 30px Arial';
      context.fillStyle = 'white';
      context.textAlign = 'center'; // Set text alignment to center
      context.fillText(customText, image.width / 2 + textOverlayPosition.x, image.height / 2 + textOverlayPosition.y);

      const dataURL = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.href = dataURL;
      downloadLink.download = 'generated_image.png';

      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    };
  };

  return (
    <div className="dropzone-container">
      <div>
        <h1 className="heading">Bible Image Generator:</h1>
      </div>
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        <p>Drag and drop some files here, or click to select files</p>
      </div>
      <div className="files-container">
        <h2 className="heading">Image Preview:</h2>
        {files.map((file) => (
          <div key={file.name} className="file-container">
            <div className="image-preview-box">
              <div className="image-preview-container">
                <img src={URL.createObjectURL(file)} alt={file.name} className="preview-image" />
                <Draggable
                  defaultPosition={{ x: 0, y: 0 }}
                  bounds="parent"
                  scale={1}
                  onDrag={handleDrag}
                >
                  <div className="text-overlay">
                    <p>{customText}</p>
                  </div>
                </Draggable>
              </div>
            </div>
            <span>{file.name}</span>
            <button onClick={removeFile}>Remove</button>
          </div>
        ))}
      </div>
      <div className="input-box">
        <h2 className="heading">Enter Bible verse or custom text here:</h2>
        <label htmlFor="customText">Enter custom text:</label>
        <input
          type="text"
          id="customText"
          value={customText}
          onChange={handleCustomTextChange}
          placeholder="Enter custom text"
          className="custom-text-input"
        />
      </div>
      <button onClick={handleDownloadClick} className="download-button">Download Image</button>
    </div>
  );
};

export default DropzoneComponent;
