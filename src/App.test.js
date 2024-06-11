import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the title "XXX Coin"', () => {
  render(<App />);
  const titleElement = screen.getByText(/XXX Coin/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders the click counter', () => {
  render(<App />);
  const counterElement = screen.getByText(/0/); // Предполагая, что начальное значение счётчика 0
  expect(counterElement).toBeInTheDocument();
});
