'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';

import useScreenSize from '../../../hooks/useScreenSize';
import { HamburgerIcon, CloseIcon } from '../../icons';

import AppLink from './AppLink';
import LINKS from './links';

const AppLinks = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [activeLinkColor, setActiveLinkColor] = useState('');
  const [inactiveLinkColor, setInactiveLinkColor] = useState('');
  const screenSize = useScreenSize();
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(screenSize < 1280);
    setIsMobileMenuOpen(false);
  }, [screenSize]);

  useEffect(() => {
    const isDarkTheme = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    const darkThemeMediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)'
    );

    const determineActiveColor = (isDarkTheme: boolean) => {
      return isDarkTheme ? '#ffffff' : '#000000';
    };
    const determineInactiveColor = (isDarkTheme: boolean) => {
      return isDarkTheme ? '#646464' : '#808080';
    };

    setIsDarkTheme(isDarkTheme);
    setActiveLinkColor(determineActiveColor(isDarkTheme));
    setInactiveLinkColor(isDarkTheme ? '#646464' : '#808080');
    setIsVisible(screenSize < 1280);

    const eventListener = (mediaQueryListEvent: MediaQueryListEvent) => {
      const newIsDarkTheme = mediaQueryListEvent.matches;
      setIsDarkTheme(newIsDarkTheme);
      setActiveLinkColor(determineActiveColor(newIsDarkTheme));
      setInactiveLinkColor(determineInactiveColor(newIsDarkTheme));
    };

    darkThemeMediaQuery.addEventListener('change', eventListener);

    return () => {
      darkThemeMediaQuery.removeEventListener('change', eventListener);
    };
  }, [screenSize]);

  const toggleVisibility = () => {
    setIsMobileMenuOpen((prevIsVisible) => !prevIsVisible);
  };

  const menuBackdropColor = isDarkTheme ? 'bg-black' : 'bg-white';
  const menuLinksClassName = clsx(
    isVisible && isMobileMenuOpen ? 'flex' : 'hidden',
    'flex-col',
    'pt-24',
    'space-x-0',
    'space-y-4',
    'flex-di',
    'items-center',
    'absolute',
    menuBackdropColor,
    'top-2',
    'right-0',
    'left-0',
    'w-full',
    'xl:flex',
    'xl:flex-row',
    'xl:pt-0',
    'xl:space-y-0',
    'xl:space-x-6',
    'h-full',
    'xl:static',
    'xl:w-auto',
    'xl:bg-transparent'
  );

  return (
    <div className="flex flex-col xl:space-x-6 xl:flex-row">
      <button
        className="absolute top-24px right-24px xl:hidden"
        onClick={toggleVisibility}
      >
        <HamburgerIcon color={activeLinkColor} />
      </button>
      <div className={menuLinksClassName}>
        {LINKS.map((link) => {
          return (
            <AppLink
              key={link.to}
              link={link}
              activeLinkColor={activeLinkColor}
              inactiveLinkColor={inactiveLinkColor}
            />
          );
        })}
        {isVisible && isMobileMenuOpen && (
          <button
            onClick={toggleVisibility}
            className="absolute top-24px right-24px"
          >
            <CloseIcon color={activeLinkColor} />
          </button>
        )}
      </div>
    </div>
  );
};

export default AppLinks;
