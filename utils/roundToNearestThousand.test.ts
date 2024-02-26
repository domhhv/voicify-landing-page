import { test, expect } from 'vitest';

test('rounds numbers higher than 1000', () => {
  const roundToNearestThousand = (num: number) => {
    const roundedNumber = Math.round((num / 1000) * 10) / 10;

    if (Number.isInteger(roundedNumber)) {
      return roundedNumber + 'k';
    } else {
      return roundedNumber.toFixed(1) + 'k';
    }
  };

  expect(roundToNearestThousand(1000)).toBe('1k');
  expect(roundToNearestThousand(1001)).toBe('1k');
  expect(roundToNearestThousand(1501)).toBe('1.5k');
  expect(roundToNearestThousand(10000)).toBe('10k');
  expect(roundToNearestThousand(10001)).toBe('10k');
  expect(roundToNearestThousand(100000)).toBe('100k');
  expect(roundToNearestThousand(100001)).toBe('100k');
  expect(roundToNearestThousand(1000000)).toBe('1000k');
  expect(roundToNearestThousand(1000001)).toBe('1000k');
});

test('does not round numbers lower than 1000', () => {
  const roundToNearestThousand = (num: number) => {
    if (num < 1000) {
      return num;
    }
  };

  expect(roundToNearestThousand(999)).toBe(999);
  expect(roundToNearestThousand(500)).toBe(500);
  expect(roundToNearestThousand(1)).toBe(1);
});
