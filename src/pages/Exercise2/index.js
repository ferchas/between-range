import React, { useState, useEffect } from "react";

import { Layout } from '../../components/Layout';
import { Range } from '../../components/Range';

import { minMaxDataService } from '../../services/minMaxData';

import './exercise2.scss';

export const Exercise2 = () => {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(10);

  const [minOut, setMinOut] = useState(0);
  const [maxOut, setMaxOut] = useState(0);

  const [rangeList, setRangeList] = useState([]);


  const handleRange = (range) => {
    setMinOut(range.min.toFixed(2));
    setMaxOut(range.max.toFixed(2));
  };

  useEffect(async () => {
    const { list } = await minMaxDataService.getList();
    const firstItem = list[0];
    const lastItem = list[list.length-1];

    setRangeList(list);
    setMin(firstItem);
    setMax(lastItem);
    setMinOut(firstItem);
    setMaxOut(lastItem);
  }, []);

  return (
    <Layout >
      <>
        <h1>Normal range from min to max</h1>
        <p>
          range. It has to be a custom one. – 
          Given a range of values: [1.99, 5.99, 10.99, 30.99, 50.99, 70.99] 
          he user will only be able to select those values in range
        </p>
        <div className="exercise2__wp">
          Min: {minOut} -- max: {maxOut} 
          <Range min={min}  max={max} listRange={rangeList} callback={handleRange} />
        </div>
      </>
    </Layout>
  );
};
