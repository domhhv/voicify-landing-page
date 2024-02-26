import type { NextPage } from 'next';
import Head from 'next/head';

import { AppBanner, VoiceModelsSection } from '../../components';
import { VoiceCategoryChipsList } from '../../components';
import styles from '../../styles/Home.module.css';

const PREMIUM_VOICE_MODELS = [
  {
    id: 1,
    name: 'Drake',
    usesCount: 2056,
    likesCount: 1567,
    thumbnailUrl: 'https://i.ibb.co/m5Bz8V5/drake.webp',
    type: 'premium',
  },
  {
    id: 2,
    name: 'Ariana',
    usesCount: 1309,
    likesCount: 1827,
    thumbnailUrl: 'https://i.ibb.co/dkZwDpp/ariana.webp',
    type: 'premium',
  },
  {
    id: 3,
    name: 'Juice',
    usesCount: 467,
    likesCount: 845,
    thumbnailUrl: 'https://i.ibb.co/rf7rzFR/juice.webp',
    type: 'premium',
  },
  {
    id: 4,
    name: 'Plankton',
    usesCount: 256,
    likesCount: 567,
    thumbnailUrl: 'https://i.ibb.co/pnptNqf/plankton.webp',
    type: 'premium',
  },
];

const VOICE_MODELS = [
  {
    id: 1,
    name: 'Elvis',
    usesCount: 1106,
    likesCount: 324,
    thumbnailUrl: 'https://i.ibb.co/MBw062D/elvis.png',
  },
  {
    id: 2,
    name: 'Minecraft Villager',
    usesCount: 1506,
    likesCount: 2507,
    thumbnailUrl: 'https://i.ibb.co/RCj2vtR/minecraft.png',
  },
  {
    id: 3,
    name: 'Anime',
    usesCount: 1061,
    likesCount: 1560,
    thumbnailUrl: 'https://i.ibb.co/D7NmdG7/anime.png',
  },
  {
    id: 4,
    name: 'Patrick',
    usesCount: 143,
    likesCount: 987,
    thumbnailUrl: 'https://i.ibb.co/tZt39Bs/patrick.png',
  },
];

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Voicify</title>
        <meta
          name="description"
          content="Voicify is a platform for voice AI modeling."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AppBanner />
        <VoiceCategoryChipsList />
        <VoiceModelsSection
          data={PREMIUM_VOICE_MODELS}
          iconPath="/heart.svg"
          iconAlt={'Heart icon'}
        />
        <VoiceModelsSection
          title="Community"
          data={VOICE_MODELS}
          iconPath="/heart.svg"
          iconAlt={'Heart icon'}
        />
        <VoiceModelsSection
          title="More voices"
          data={VOICE_MODELS.concat(VOICE_MODELS).concat(VOICE_MODELS)}
          iconPath="/music.svg"
          iconAlt="Music icon"
        />
      </main>
    </div>
  );
};

export default Home;
