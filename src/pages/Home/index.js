import React from "react";

import { Layout } from './../../components/Layout';

export const Home = () => {
  return (
    <Layout >
      <h1>Exercise</h1>
      <p>
        You have to create the following component: Range
        You have to use React to create the solution.
        You do NOT have to use any CLI to create structure and architecture of your application.
        This component has two use modes:
      </p>
      <div>
        1. Normal range from min to max.
        2. Fixed number of options range.
      </div>
      <p>
        Provide a localhost:8080/exercise1 route with the following:
        – The component CAN'T be a HTML5 input range. It has to be a custom one.
        – The user can drag two bullets through the range line.
        – The user can click on both currency number label values (min or max) and set a
        new value.
        – The value will never be less than min or greater than max input values.
        – When some bullet is on hover, this bullet has to be bigger and change cursor's type
        into draggable.
        – Dragging a bullet turns cursor to dragging
        – Min value and max value can't be crossed in range
        – For this example, provide a mocked http service returning min and max values
        that have to be used in the component. Example: min: 1, max: 100. Use
        https://www.mockable.io/ or a custom mocked
        server.
        – Do as many unit tests as you can.
      </p>
    </Layout>
  );
};
