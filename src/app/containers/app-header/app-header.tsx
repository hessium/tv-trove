import Link from 'next/link';
import Image from 'next/image';

import './app-header.scss';
import { AuthLink } from '@/app/components/auth-link/auth-link';
import { HeaderNavigation } from '@/app/containers/app-header/elems/header-navigation';

export const AppHeader = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <div className='header__row'>
            <Link href='/'>
              <Image
                src='/images/logo/logo.svg'
                width={44}
                height={44}
                alt='logo tv trove'
                priority
              />
            </Link>

            <HeaderNavigation />
          </div>

          <AuthLink />
        </div>
      </div>
    </header>
  );
};
