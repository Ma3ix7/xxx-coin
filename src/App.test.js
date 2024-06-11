import { render, screen } from '@testing-library/react';
import App from './App';

test('renders coin title', () => {
  render(<App />);
  const titleElement = screen.getByText(/XXX Coin/i);
  expect(titleElement).toBeInTheDocument();
});
