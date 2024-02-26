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
  console.log('pathname', pathname);
  console.log('link.to', link.to);
  console.log('isCurrent', isCurrent);
  const className = `flex items-center space-x-2 font-bold ${isCurrent ? '' : 'inactive-link'}`;
  const Icon = link.icon;

  return (
    <div data-testid="link-container" className={className}>
      <Icon color={isCurrent ? activeLinkColor : inactiveLinkColor} />
      <Link href={link.to}>{link.title}</Link>
    </div>
  );
};

export default AppLink;
