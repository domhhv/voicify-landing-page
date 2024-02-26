'use client';

import useScreenSize from '../../hooks/useScreenSize';
import { InstagramIcon, TikTokIcon, YouTubeIcon } from '../icons';

const AppBanner = () => {
  const screenSize = useScreenSize();

  const isMobile = screenSize < 769;

  return (
    <section className="relative">
      <div className="banner-image">
        <div className="banner-text-container">
          <h1 className="hero-banner-heading text-left md:text-center">
            Create song covers using any voice with AI
          </h1>
          {!isMobile && (
            <h3 className="hero-banner-subheading">
              The #1 platform for making high quality AI covers in seconds!
            </h3>
          )}
        </div>
      </div>
      <div className="hidden md:flex flex-col p-6 lg:p-8 space-y-2 absolute rounded-full bg-white banner-social-views-chip">
        <div className="flex space-x-4 items-center">
          <TikTokIcon />
          <YouTubeIcon />
          <InstagramIcon />
        </div>
        <p className="text-gray-600 hero-banner-chip-text">
          Voicify generated 100M+ views
        </p>
      </div>
    </section>
  );
};

export default AppBanner;
