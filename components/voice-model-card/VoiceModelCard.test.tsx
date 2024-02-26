import { render } from '@testing-library/react';
import { test, expect } from 'vitest';

import { VoiceModelCard } from './index';

test('renders the voice model card', () => {
  const { getByText } = render(
    <VoiceModelCard
      name="Test"
      likesCount={1142}
      usesCount={1506}
      thumbnailUrl="path/to/thumbnail"
    />
  );
  expect(getByText('Test')).toBeTruthy();
  expect(getByText('Likes: 1.1k')).toBeTruthy();
  expect(getByText('Uses: 1.5k')).toBeTruthy();
});
