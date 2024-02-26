import { render } from '@testing-library/react';
import { test, expect } from 'vitest';

import VoiceModelsSection from './VoiceModelsSection';

test('renders VoiceModelsSection', () => {
  const data = [
    {
      id: 1,
      name: 'Test name',
      usesCount: 1,
      likesCount: 1,
      thumbnailUrl: 'test-url',
    },
  ];
  const { getByText, getByRole } = render(
    <VoiceModelsSection
      title="Test title"
      data={data}
      iconPath="https://example.com/avatar.png"
      iconAlt=""
    />
  );
  expect(getByText('Test title')).toBeDefined();
  expect(getByText('Test name')).toBeDefined();
  expect(getByText('Likes: 1')).toBeDefined();
  expect(getByText('Uses: 1')).toBeDefined();
  expect(getByRole('voice-thumbnail')).toBeDefined();

  const thumbnail = getByRole('voice-thumbnail') as HTMLImageElement;
  const uri = `/_next/image?url=${encodeURIComponent('https://example.com/avatar.png')}&w=256&q=75`;
  expect(thumbnail.src).toContain(uri);
});

test('does not render title when not provided', () => {
  const data = [
    {
      id: 1,
      name: 'Test name',
      usesCount: 1,
      likesCount: 1,
      thumbnailUrl: 'test-url',
    },
  ];
  const { queryByText } = render(
    <VoiceModelsSection
      data={data}
      iconPath="https://example.com/avatar.png"
      iconAlt=""
    />
  );
  expect(queryByText('Test title')).toBeNull();
});
