import clsx from 'clsx';

import VoiceCategoryChip from './VoiceCategoryChip';

const VOICE_CATEGORIES = [
  {
    id: 1,
    slug: 'music',
    label: 'Music',
  },
  {
    id: 2,
    slug: 'cartoon',
    label: 'Cartoon',
  },
  {
    id: 3,
    slug: 'anime',
    label: 'Anime',
  },
  {
    id: 4,
    slug: 'gaming',
    label: 'Gaming',
  },
  {
    id: 5,
    slug: 'german',
    label: 'German',
  },
  {
    id: 6,
    slug: 'korean',
    label: 'Korean',
  },
  {
    id: 7,
    slug: 'french',
    label: 'French',
  },
  {
    id: 8,
    slug: 'public-figure',
    label: 'Public Figure',
  },
];

const VoiceCategoryChipsList = () => {
  const chipsContainerClassName = clsx(
    'flex',
    'flex-wrap',
    'py-20',
    'space-y-4',
    'gap-0',
    'md:gap-4',
    'justify-center',
    'items-baseline'
  );

  return (
    <div className={chipsContainerClassName}>
      {VOICE_CATEGORIES.map((category) => {
        return (
          <VoiceCategoryChip
            key={category.id}
            label={category.label}
            slug={category.slug}
          />
        );
      })}
    </div>
  );
};

export default VoiceCategoryChipsList;
