import type { NextPage } from 'next';
import Head from 'next/head';

import { AppBanner } from '../../components';
import { VoiceCategoryChipsList } from '../../components';
import styles from '../../styles/Home.module.css';

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
      </main>
    </div>
  );
};

export default Home;
