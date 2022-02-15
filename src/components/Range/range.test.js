import { render } from '@testing-library/react';
import { Range } from './';

test('renders Range ', () => {
  const { container: {firstChild}, } = render(<Range />);
  expect(firstChild).toBeInTheDocument();
});
