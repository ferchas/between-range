import React, { useEffect, useState } from "react";

import  './range.scss';

let clicked = ''; 

export const Range = ({min, max, callback, reset}) => {  
  const [sliderLeft, setSliderLeft] = useState(0); 
  const [sliderRight, setSliderRight] = useState(100); 

  const handleMouseMove = (event) => {
    
    const parentWidth = event.currentTarget.clientWidth || 1;
    const relativeWidth = 100 * event.clientX / parentWidth;

    if (0 < relativeWidth && relativeWidth < 100 && clicked != '') {
      if (clicked === 'left' && relativeWidth < sliderRight) {
         setSliderLeft(relativeWidth);  
      }

      if (clicked === 'right' && relativeWidth > sliderLeft) {
        setSliderRight(relativeWidth);  
      }
    } 
  }

  const handleMouseDown = (point) => {
    clicked = point;
  };

  const handleClickUp = () => {
    clicked = ''
  }

  useEffect(() => {
    if (callback) {
      callback({
        min: (Number(min) + (Number(max)*sliderLeft/100)), 
        max: ((Number(max)*sliderRight)/100),
      });
    }
  },[sliderLeft, sliderRight]);

  useEffect(()=>{
    setSliderLeft(0);
    setSliderRight(100)
  },[reset]);

  return (
    <>
      <div  className="range" onMouseMove={handleMouseMove} onMouseUp={handleClickUp}>
        <div className="range__track">
          <span 
            className="range__slider_left"
            onMouseDown={() => handleMouseDown('left')} 
            style={{left: `${sliderLeft}%` }}>
            <div className="range__slider" />
          </span>
          <span 
            className="range__slider_right"
            onMouseDown={() => handleMouseDown('right')} 
            style={{left: `${sliderRight}%` }}
          >
            <div className="range__slider" />
          </span>
        </div>
      </div>
    </>
  );
};
