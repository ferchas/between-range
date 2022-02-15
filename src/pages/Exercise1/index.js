import React, { useState, useEffect } from "react";

import { Layout } from '../../components/Layout';
import { Range } from '../../components/Range';

import { minMaxDataService } from '../../services/minMaxData';

import './exercise1.scss';

export const Exercise1 = () => {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(10);

  const [minOut, setMinOut] = useState(1);
  const [maxOut, setMaxOut] = useState(10);

  const [resetRange, setResetRange] = useState(false);

  const handleRange = (range) => {
    setMinOut(range.min?.toFixed());
    setMaxOut(range.max);
  };

  const hanldeInputRangeMin = (e) => {
    setMin(e.target.value);
    setResetRange(1);
  }

  const hanldeInputRangeMax = (e)=> {
    setMax(e.target.value);
    setResetRange(2);
  }

  useEffect(async () => {
    const range = await minMaxDataService.get();
    handleRange(range);
    setMin(range.min);
    setMax(range.max);
  }, []);

  return (
    <Layout >
      <>
        <h1>Normal range from min to max</h1>
        <h3>Range</h3>
        <div className="exercise1__wp">
          Min: {minOut} -- max: {maxOut} 
          <Range min={min}  max={max} callback={handleRange} reset={resetRange}/>
        </div>
        <div>
          
          Min:<input type="number" onChange={hanldeInputRangeMin} value={min} /> 
            ---- 
          Max: <input type="number" onChange={hanldeInputRangeMax} value={max} />
        </div>
      </>
    </Layout>
  );
};
