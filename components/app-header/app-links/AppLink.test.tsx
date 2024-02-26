import { render } from '@testing-library/react';
import { expect, test, vi } from 'vitest';

import AppLink from './AppLink';

vi.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

test('displays inactive link', () => {
  const { getByTestId } = render(
    <AppLink
      activeLinkColor=""
      inactiveLinkColor=""
      link={{ title: '', to: '/library', icon: () => <></> }}
    />
  );
  expect(getByTestId('link-container').className).toContain('inactive-link');
});
