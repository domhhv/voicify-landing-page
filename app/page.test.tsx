import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import Page from './page';

test('App Router: Works with Server Components', () => {
  render(<Page />);
  expect(
    screen.getByRole('heading', { level: 1, name: 'App Router' })
  ).toBeDefined();
});
