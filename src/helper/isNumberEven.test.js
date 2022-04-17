import { isNumberEven } from './isNumberEven';

test('providing even number should return true', () => {
  const evenNumber = 4;

  const result = isNumberEven(evenNumber);

  expect(result).toBeTruthy();
});

test('providing odd number should return false', () => {
  const evenNumber = 3;

  const result = isNumberEven(evenNumber);

  expect(result).toBeFalsy();
});
