'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { VoicifyLink } from './links';

type AppLinkProps = {
  activeLinkColor: string;
  inactiveLinkColor: string;
  link: VoicifyLink;
};

const AppLink = ({
  link,
  activeLinkColor,
  inactiveLinkColor,
}: AppLinkProps) => {
  const pathname = usePathname();

  const isCurrent = pathname === link.to;
  const className = `flex items-center space-x-2 font-bold ${isCurrent ? '' : 'inactive-link'}`;
  const Icon = link.icon;

  return (
    <div className={className}>
      <Icon color={isCurrent ? activeLinkColor : inactiveLinkColor} />
      <Link href={link.to}>{link.title}</Link>
    </div>
  );
};

export default AppLink;
