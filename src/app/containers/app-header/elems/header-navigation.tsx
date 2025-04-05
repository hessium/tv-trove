'use client';
import './header-navigation.scss';
import { cn } from '@/app/shared/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@/app/shared/ui/icon/icon';
import { AnyIconName } from '@/app/shared/ui/icon/icon';
import { LINKS } from '@/app/shared/constants/links';

export const HeaderNavigation = () => {
  const pathname = usePathname();

  return (
    <nav className='header-navigation'>
      <ul className='header-navigation__list'>
        {LINKS.navigation.map((nav, index) => (
          <li key={nav.pathname + index}>
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
          </li>
        ))}
      </ul>
    </nav>
  );
};
