'use client';
import './header-navigation.scss';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@/shared/ui/icon/icon';
import { AnyIconName } from '@/shared/ui/icon/icon';
import { LINKS } from '@/shared/constants/links';
import { cn } from '@/shared/utils/cn';
import { FadeAnimation } from '@/shared/ui/fade-animation/fade-animation';

export const HeaderNavigation = () => {
  const pathname = usePathname();

  return (
    <nav className='header-navigation'>
      <ul className='header-navigation__list'>
        {LINKS.navigation.map((nav, index) => (
          <li key={nav.pathname + index}>
            <FadeAnimation  variant="scale" threshold={0} triggerOnce={true}>
              <Link
                className={cn(
                  'header-navigation__link',
                  pathname === nav.pathname && 'header-navigation__link--active',
                )}
                href={nav.pathname}
              >
                <Icon
                  name={`common/${nav.icon}` as AnyIconName}
                  width='24'
                  height='24'
                />
                <span>{nav.name}</span>
              </Link>
            </FadeAnimation>
          </li>
        ))}
      </ul>
    </nav>
  );
};
