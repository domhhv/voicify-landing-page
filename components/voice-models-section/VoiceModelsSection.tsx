import Image from 'next/image';

import { VoiceModelCard } from '../voice-model-card';

type VoiceModelsSectionProps = {
  title?: string;
  iconPath: string;
  iconAlt: string;
  data: {
    id: number;
    name: string;
    usesCount: number;
    likesCount: number;
    thumbnailUrl: string;
    type?: string;
  }[];
};

const VoiceModelsSection = ({
  title,
  data,
  iconPath,
  iconAlt,
}: VoiceModelsSectionProps) => {
  return (
    <section className="w-full mb-24">
      {title && (
        <div className="flex items-center gap-4 mb-8">
          <Image
            src={iconPath}
            alt={iconAlt}
            width={72}
            height={72}
            className="max-lg:w-40px max-lg:h-40px max-md:w-24px max-md:h-24px"
            role="voice-thumbnail"
          />
          <p className="category-title">
            {title} <span className="category-count">{data.length}</span>
          </p>
        </div>
      )}
      <div className="w-full flex gap-8 flex-wrap">
        {data.map((model) => {
          return (
            <VoiceModelCard
              key={crypto.randomUUID()}
              name={model.name}
              usesCount={model.usesCount}
              likesCount={model.likesCount}
              thumbnailUrl={model.thumbnailUrl}
              premium={model.type === 'premium'}
              platinum={model.type === 'platinum'}
            />
          );
        })}
      </div>
    </section>
  );
};

export default VoiceModelsSection;
