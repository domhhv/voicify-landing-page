import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import {
  AppBanner,
  VoiceModelCard,
  VoiceModelsSection,
} from '../../components';
import { VoiceCategoryChipsList } from '../../components';
import styles from '../../styles/Home.module.css';

const VOICE_MODELS = [
  {
    id: 1,
    name: 'Elvis',
    usesCount: 324,
    likesCount: 1056,
    thumbnailUrl: 'https://i.ibb.co/MBw062D/elvis.png',
  },
  {
    id: 2,
    name: 'Minecraft Villager',
    usesCount: 324,
    likesCount: 1056,
    thumbnailUrl: 'https://i.ibb.co/RCj2vtR/minecraft.png',
  },
  {
    id: 3,
    name: 'Anime',
    usesCount: 324,
    likesCount: 1056,
    thumbnailUrl: 'https://i.ibb.co/D7NmdG7/anime.png',
  },
  {
    id: 4,
    name: 'Patrick',
    usesCount: 324,
    likesCount: 1056,
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
