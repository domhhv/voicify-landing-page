import { render } from '@testing-library/react';
import { expect, test } from 'vitest';

import AccountDropdown, { AccountDropdownProps } from './AccountDropdown';

const props: AccountDropdownProps = {
  credits: 100,
  avatarUrl: 'https://example.com/avatar.png',
};

test('should render correct credits amount', () => {
  const { getByRole } = render(<AccountDropdown {...props} />);
  expect(getByRole('user-credits').textContent).toEqual('100');
});

test('should render correct avatar url', () => {
  const { getAllByRole } = render(<AccountDropdown {...props} />);
  const uri = `/_next/image?url=${encodeURIComponent('https://example.com/avatar.png')}&w=96&q=75`;
  const userAvatar = getAllByRole('user-avatar')[0] as HTMLImageElement;
  expect(userAvatar.src).toContain(uri);
});
