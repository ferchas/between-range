import { render, screen } from '@testing-library/react';
import App from './App';

test('renders h1 ', () => {
  render(<App />);
  const title = screen.getByText("Exercise");
  expect(title).toBeInTheDocument();
});
