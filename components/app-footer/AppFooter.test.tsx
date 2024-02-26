import { render, within } from '@testing-library/react';
import { test, expect } from 'vitest';

import { AppFooter } from './index';

test('displays footer with links', () => {
  const { getByRole, getByText } = render(<AppFooter />);
  expect(getByText('© Copyright 2023')).toBeDefined();
  expect(getByText('Voicify AI LTD')).toBeDefined();
  expect(getByText('Keep rocking & sing your song.')).toBeDefined();
  const footer = getByRole('footer-info');
  expect(footer).toBeDefined();

  const homeLink = within(footer).getByRole('link', { name: /home/i });
  expect(homeLink).toBeDefined();

  const blogLink = within(footer).getByRole('link', { name: /blog/i });
  expect(blogLink).toBeDefined();

  const settingsLink = within(footer).getByRole('link', { name: /settings/i });
  expect(settingsLink).toBeDefined();

  const cartoonLink = within(footer).getByRole('link', { name: /cartoon/i });
  expect(cartoonLink).toBeDefined();

  const pricingLink = within(footer).getByRole('link', { name: /pricing/i });
  expect(pricingLink).toBeDefined();

  const logInLink = within(footer).getByRole('link', { name: /log in/i });
  expect(logInLink).toBeDefined();

  const signUpLink = within(footer).getByRole('link', { name: /sign up/i });
  expect(signUpLink).toBeDefined();

  const forgotPasswordLink = within(footer).getByRole('link', {
    name: /forgot password/i,
  });
  expect(forgotPasswordLink).toBeDefined();

  const historyLink = within(footer).getByRole('link', { name: /history/i });
  expect(historyLink).toBeDefined();

  const termsLink = within(footer).getByRole('link', { name: /terms of use/i });
  expect(termsLink).toBeDefined();

  const privacyPolicyLink = within(footer).getByRole('link', {
    name: /privacy policy/i,
  });
  expect(privacyPolicyLink).toBeDefined();

  const refundPolicyLink = within(footer).getByRole('link', {
    name: /refund policy/i,
  });
  expect(refundPolicyLink).toBeDefined();

  const drizzyLink = within(footer).getByRole('link', {
    name: /drizzy ai model/i,
  });
  expect(drizzyLink).toBeDefined();

  const juiceLink = within(footer).getByRole('link', {
    name: /juice ai model/i,
  });
  expect(juiceLink).toBeDefined();

  const kanyeLink = within(footer).getByRole('link', {
    name: /kanye ai model/i,
  });
  expect(kanyeLink).toBeDefined();

  const weekndLink = within(footer).getByRole('link', {
    name: /weeknd ai model/i,
  });
  expect(weekndLink).toBeDefined();

  const patrickLink = within(footer).getByRole('link', {
    name: /patrick ai model/i,
  });
  expect(patrickLink).toBeDefined();

  const taylorLink = within(footer).getByRole('link', {
    name: /taylor ai model/i,
  });
  expect(taylorLink).toBeDefined();
});
