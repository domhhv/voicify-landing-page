import { render } from '@testing-library/react';
import { test, expect } from 'vitest';

import { AppBanner } from './index';

test('displays banner with text', () => {
  const { getByText } = render(<AppBanner />);
  expect(getByText('Create song covers using any voice with AI')).toBeDefined();
  expect(
    getByText('The #1 platform for making high quality AI covers in seconds!')
  ).toBeDefined();
  expect(getByText('Voicify generated 100M+ views')).toBeDefined();
});
