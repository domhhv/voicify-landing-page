import Link from 'next/link';

import { VoicifyLogo } from '../icons';

const AppFooter = () => {
  return (
    <footer
      role="footer-info"
      className="flex flex-col mt-64px px-0 xl:columns-2 md:flex-row md:px-84px py-40px border-t-light-gray border-t-2 md:space-x-6 text-gray-600"
    >
      <div className="flex flex-col md:max-xl:flex-row xl:flex-row flex-1">
        <div className="flex flex-col items-center justify-between flex-1 md:items-start">
          <div className="flex flex-col">
            <VoicifyLogo color="#6F2DC1" />
            <br />
            <br />
            <p className="text-center md:text-left">© Copyright 2023</p>
            <p>Voicify AI LTD</p>
          </div>
          <div className="mb-4 md:mb-0">
            <p>Keep rocking & sing your song.</p>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center md:items-start">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/settings">Settings</Link>
          <Link href="/cartoon">Cartoon</Link>
        </div>
      </div>
      <div className="flex flex-col md:max-xl:flex-row xl:flex-row flex-1">
        <div className="flex-1 flex flex-col items-center md:items-start">
          <Link href="/pricing">Pricing</Link>
          <Link href="/log-in">Log In</Link>
          <Link href="/sign-up">Sign Up</Link>
          <Link href="/forgot-password">Forgot Password</Link>
          <Link href="/history">History</Link>
          <br />
          <br />
          <Link href="/terms">Terms of Use</Link>
          <Link href="/privacy-policy">Privacy policy</Link>
          <Link href="/refund-policy">Refund Policy</Link>
        </div>
        <div className="flex-1 flex flex-col items-center md:items-start">
          <Link href="/models/drizzy">Drizzy AI Model</Link>
          <Link href="/models/juice">Juice AI Model</Link>
          <Link href="/models/kanye">Kanye AI Model</Link>
          <Link href="/models/weeknd">Weeknd AI Model</Link>
          <Link href="/models/patrick">Patrick AI Model</Link>
          <Link href="/models/taylor">Taylor AI Model</Link>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
