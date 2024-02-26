import { renderHook } from '@testing-library/react';
import { test, expect } from 'vitest';

import useScreenSize from './useScreenSize';

test('useScreenSize returns a number', () => {
  const { result } = renderHook(() => useScreenSize());
  expect(typeof result.current).toBe('number');
});

test('useScreenSize returns initial window.innerWidth', () => {
  window.innerWidth = 1000;
  const { result } = renderHook(() => useScreenSize());
  expect(result.current).toBe(1000);
});
