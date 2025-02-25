import Image from 'next/image';
import Link from 'next/link';
import cl from './app-header.module.scss';
import { LINKS } from '@/app/shared/constants/links';
import { AuthLink } from '@/app/components/auth-link/auth-link';
import { HeaderNavigation } from '@/app/containers/app-header/elems/header-navigation';
import { moviesApi } from '@/app/shared/api/movies';

export const AppHeader = () => {
  return (
    <header className={cl.header}>
      <div className='container'>
        <div className={cl.header__wrapper}>
          <div className={cl.header__row}>
            <Link href={LINKS.home()}>
              <Image
                src='/images/logo/logo.svg'
                width={44}
                height={44}
                alt='logo tv trove'
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
