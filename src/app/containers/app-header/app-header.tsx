import Link from 'next/link';
import Image from 'next/image';

import './app-header.scss';
import { AuthLink } from '@/app/components/auth-link/auth-link';
import { HeaderNavigation } from '@/app/containers/app-header/elems/header-navigation';
import { FadeAnimation } from '@/shared/ui/fade-animation/fade-animation';

export const AppHeader = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__row">
            <FadeAnimation variant="scale" threshold={0} triggerOnce={true}>
              <Link className='header__logo' href="/">
                <Image
                  fill
                  priority
                  alt="logo tv trove"
                  src="/images/logo/logo.svg"
                  blurDataURL={'/images/logo/logo.svg'}
                />
              </Link>
            </FadeAnimation>

            <HeaderNavigation />
          </div>

          <FadeAnimation variant="scale" threshold={0} triggerOnce={true}>
            <AuthLink />
          </FadeAnimation>
        </div>
      </div>
    </header>
  );
};
