import clsx from 'clsx';
import Image from 'next/image';

import CreditsIcon from '../../icons/CreditsIcon';

export type AccountDropdownProps = {
  credits: number;
  avatarUrl: string;
};

const AccountDropdown = ({ credits, avatarUrl }: AccountDropdownProps) => {
  const creditsButtonClassName = clsx(
    'bg-light-purple',
    'rounded-full',
    'p-2',
    'flex',
    'space-x-1',
    'h-46',
    'w-84',
    'justify-center',
    'items-center'
  );

  return (
    <div className="flex space-x-2">
      <button className={creditsButtonClassName}>
        <CreditsIcon color={'#6F2DC1'} />
        <span role="user-credits" className="text-purple-600 font-semibold">
          {credits}
        </span>
      </button>
      <Image
        className="rounded-full"
        role="user-avatar"
        src={avatarUrl || ''}
        alt="User avatar"
        width={40}
        height={40}
      />
    </div>
  );
};

export default AccountDropdown;
