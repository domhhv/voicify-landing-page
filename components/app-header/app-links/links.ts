import { ReactNode } from 'react';

import {
  HomeIcon,
  VoiceIcon,
  CommunityIcon,
  PricingIcon,
  ContactIcon,
} from '../../icons';

export type VoicifyLink = {
  title: string;
  to: string;
  icon: (props: { color: string }) => ReactNode;
};

const LINKS = [
  {
    title: 'Home',
    to: '/',
    icon: HomeIcon,
  },
  {
    title: 'My Library',
    to: '/library',
    icon: VoiceIcon,
  },
  {
    title: 'Community',
    to: '/community',
    icon: CommunityIcon,
  },
  {
    title: 'Pricing',
    to: '/pricing',
    icon: PricingIcon,
  },
  {
    title: 'Contact',
    to: '/contact',
    icon: ContactIcon,
  },
];

export default LINKS;
