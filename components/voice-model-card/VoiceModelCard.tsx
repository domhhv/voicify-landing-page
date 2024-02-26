import clsx from 'clsx';
import Image from 'next/image';

import { roundToNearestThousand } from '../../utils';

type VoiceModelCardProps = {
  name: string;
  usesCount: number;
  likesCount: number;
  thumbnailUrl: string;
  premium?: boolean;
  platinum?: boolean;
};

const VoiceModelCard = ({
  name,
  usesCount,
  likesCount,
  thumbnailUrl,
  premium,
  platinum,
}: VoiceModelCardProps) => {
  const cardClassName = clsx(
    'min-width-200px',
    'relative',
    'w-full',
    'flex',
    'flex-1',
    'voice-model-card',
    'flex-col'
  );

  const getBottomContentBorderRadiusClassName = () => {
    if (premium) {
      return 'border-x-2 border-b-2 rounded-b-3xl';
    }

    return '';
  };

  const bottomContentClassName = clsx(
    'p-4',
    'space-y-2',
    getBottomContentBorderRadiusClassName()
  );

  return (
    <div className={cardClassName}>
      <button className="absolute top-12px right-12px">
        <Image
          src="/white-heart-outlined.svg"
          alt="Like icon"
          width={24}
          height={24}
        />
      </button>
      <div
        className={`voice-model-image ${platinum ? 'platinum' : ''}`}
        style={{
          backgroundImage: `url("${thumbnailUrl}")`,
        }}
      />
      <div className={bottomContentClassName}>
        <div className="flex gap-2 items-center">
          {!premium && (
            <Image src="/head.svg" alt="Head icon" width={24} height={24} />
          )}
          <h3 className="voice-model-name">{name}</h3>
        </div>
        <p className="voice-model-details">
          <span>Uses: {roundToNearestThousand(usesCount)}</span> ·{' '}
          <span>Likes: {roundToNearestThousand(likesCount)}</span>
        </p>
      </div>
    </div>
  );
};

export default VoiceModelCard;
