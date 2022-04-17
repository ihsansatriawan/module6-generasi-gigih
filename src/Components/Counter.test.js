import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Counter from './Counter';

test('all counter elements are rendered', () => {
  render(<Counter />);
  const counterDisplay = screen.getByText(/counter is 0/i);
  const plusButton = screen.getByText('+');
  const minusButton = screen.getByText('-');

  expect(counterDisplay).toBeInTheDocument();
  expect(plusButton).toBeInTheDocument();
  expect(minusButton).toBeInTheDocument();
});

test('plus button increments counter', () => {
  render(<Counter />);
  const plusButton = screen.getByText('+');

  userEvent.click(plusButton);

  expect(screen.getByText(/counter is 1/i)).toBeInTheDocument();
});

test('minus button decrements counter', () => {
  render(<Counter />);
  const plusButton = screen.getByText('-');

  userEvent.click(plusButton);

  expect(screen.getByText(/counter is -1/i)).toBeInTheDocument();
});
