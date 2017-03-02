import React from 'react';

function Human ({ photo, size, borderColor, onImageClick, onMinusClick, onPlusClick }) {
  return <div className="Human-block">
      <div className="Human-plus" onClick={onPlusClick}>
        +
      </div>
      <div className="Human-minus" onClick={onMinusClick}>
        -
      </div>
      <img onClick={onImageClick}
        src={photo}
        alt="human"
        className="Human-image"
        style={{
          border: `5px solid ${borderColor}`,
          width: size * 10,
          height: size * 10
        }}
      />
  </div>;
}

export default Human;
