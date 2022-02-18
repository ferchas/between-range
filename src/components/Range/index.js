import React, { useEffect, useState } from "react";

import  './range.scss';

let clicked = ''; 
const MIN = 0;
const MAX = 100;

export const Range = ({min, max, callback, reset, listRange}) => {  
  const [sliderLeft, setSliderLeft] = useState(MIN); 
  const [sliderRight, setSliderRight] = useState(MAX); 

  const handleMouseMove = (event) => {
    let eachPart = 0;
    const parentWidth = event.currentTarget.clientWidth || 1;
    const relativeWidth = 100 * event.clientX / parentWidth;

    if (MIN < relativeWidth && relativeWidth < MAX && clicked != '') {
      if (clicked === 'left' && relativeWidth < sliderRight) {
         setSliderLeft(eachPart ? (sliderLeft + eachPart) : relativeWidth);  
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
      let minSlected = (Number(min) + (Number(max)*sliderLeft/100));
      let maxSlected = ((Number(max)*sliderRight)/100);

      if (listRange) {
        const pointListleft = Math.round(sliderLeft*listRange.length/100);
        const pointListRight = Math.round(sliderRight*listRange.length/100);
        minSlected = listRange[pointListleft - 1];
        maxSlected = listRange[pointListRight - 1];
      }

      callback({
       min: minSlected,
       max: maxSlected,
      });
    }
  },[sliderLeft, sliderRight]);

  useEffect(()=>{
    setSliderLeft(0);
    setSliderRight(100)
  },[reset]);
  
  return (
    <>
      <div  
        className="range"
        onMouseMove={handleMouseMove}
        onMouseUp={handleClickUp}
        data-testid="range_container"
      >
        <div className="range__track">
          <span 
            className="range__slider_left"
            onMouseDown={() => handleMouseDown('left')} 
            style={{left: `${sliderLeft}%` }}
            data-testid="slide_left"
          >
            <div className="range__slider" />
          </span>
          <span 
            className="range__slider_right"
            onMouseDown={() => handleMouseDown('right')} 
            style={{left: `${sliderRight}%` }}
            data-testid="slide_right"
          >
            <div className="range__slider" />
          </span>
        </div>
      </div>
    </>
  );
};
