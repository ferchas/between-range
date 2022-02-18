import { render, fireEvent } from '@testing-library/react';

import { Range } from './';

test('renders Range ', () => {
  const { container: {firstChild}, } = render(<Range />);
  expect(firstChild).toBeInTheDocument();
});


test('Ranger validate slide Left', () => {
  const { getByTestId } = render(<Range  />);
  expect(getByTestId('slide_left')).toBeInTheDocument(); 
});


test('Ranger validate slide Right', () => {
  const { getByTestId } = render(<Range />);
  expect(getByTestId('slide_right')).toBeInTheDocument(); 
});

test('calls onClick event when clicked slide left', () => {
  const onMouseMoveWhileDown = jest.fn();
  const { getByTestId } = render(<Range />);

  fireEvent.mouseDown(getByTestId('slide_left'));
  fireEvent.mouseMove(getByTestId('range_container'), { pageX: 26 });
})
