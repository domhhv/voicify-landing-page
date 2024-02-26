import clsx from 'clsx';

import { getUser } from '../../services';
import { VoicifyLogo } from '../icons';

import { AccountDropdown } from './account-dropdown';
import { AppLinks } from './app-links';

const AppHeader = async () => {
  const user = await getUser();
  const headerInnerContainerClassName = clsx(
    'container',
    'max-w-full',
    'mx-auto',
    'py-4',
    'w-1338',
    'max-v-full',
    'flex',
    'justify-between',
    'items-center',
    'px-8',
    'pr-16',
    'xl:px-0',
    'xl:pr-0'
  );

  return (
    <header className="relative">
      <div className={headerInnerContainerClassName}>
        <VoicifyLogo color="#6F2DC1" />
        <AppLinks />
        <AccountDropdown credits={user?.credits} avatarUrl={user?.avatarUrl} />
      </div>
    </header>
  );
};

export default AppHeader;
