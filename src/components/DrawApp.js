import React, { useState } from "react";
import './DrawApp.css';
import SignatureCanvas from 'react-signature-canvas';

const DrawPage = () => {
  const [signatureImage, setSignatureImage] = useState(null);
  const [sigPad, setSigPad] = useState({});
  const [selectedColor, setSelectedColor] = useState('black');

  const changePenColor = (color) => {
    setSelectedColor(color);
  };

  const clear = () => {
    setSigPad(sigPad.clear);
  };

  const trim = () => {
    setSignatureImage(sigPad.getTrimmedCanvas().toDataURL('image/png'));
  };

  return (
    <div className="drawingMainContainer">
      <h1 style={{ color: 'white'}}>Drawing interface !</h1>
      <div className="canvaContainer">
        <SignatureCanvas
          dotSize={0.2}
          penColor={selectedColor}
          canvasProps={{ width: 1500, height: 600, className: 'sigCanvas' }}
          ref={ref => {
            setSigPad(ref);
          }}
        />
        {signatureImage ? (
          <img
            className="signatureSave"
            src={signatureImage}
            alt="signature png"
          />
        ) : null}
      </div>
      <div className="selectedColorContainer">
        <p>Selected color:</p>
        <div style={{ backgroundColor: `${selectedColor}`, width: '25px', height: '25px', margin: '0 0 0 5px'}} />
      </div>
      <div className="colorPickerContainer">
        <div onClick={() => changePenColor('red')} className="colorPicker color1" />
        <div onClick={() => changePenColor('orange')} className="colorPicker color2" />
        <div onClick={() => changePenColor('green')} className="colorPicker color3" />
        <div onClick={() => changePenColor('deepskyblue')} className="colorPicker color4" />
        <div onClick={() => changePenColor('#FB9179')} className="colorPicker color5" />
        <div onClick={() => changePenColor('black')} className="colorPicker color6" />
      </div>
      <div className="buttonsContainer">
        <button className="eraseButton" onClick={clear} type="button">
          Erase
        </button>
        <button className="saveButton" onClick={trim} type="button">
          Save
        </button>
      </div>
    </div>
  )
};

export default DrawPage;
