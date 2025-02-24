'use client';

import cl from '@/app/containers/app-header/app-header.module.scss';
import { cn } from '@/app/shared/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LINKS } from '@/app/shared/constants/links';
import { Icon } from '@/app/shared/ui/icon/icon';

export const HeaderNavigation = () => {
  const pathname = usePathname();

  return (
    <nav className={cl.navigation}>
      <ul className={cl.navigation__list}>
        <li>
          <Link
            className={cn(
              cl.navigation__link,
              pathname === LINKS.home() ? cl.navigation__link_active : '',
            )}
            href={LINKS.home()}
          >
            <Icon
              name='common/home'
              width='24'
              height='24'
            />
            <span>Главная</span>
          </Link>
        </li>
        <li>
          <Link
            className={cn(
              cl.navigation__link,
              pathname === LINKS.movies ? cl.navigation__link_active : '',
            )}
            href={LINKS.movies}
          >
            <Icon
              name='common/movie'
              width='24'
              height='24'
            />
            <span>Фильмы</span>
          </Link>
        </li>
        <li>
          <Link
            className={cn(
              cl.navigation__link,
              pathname === LINKS.serials ? cl.navigation__link_active : '',
            )}
            href={LINKS.serials}
          >
            <Icon
              name='common/serial'
              width='24'
              height='24'
            />
            <span>Сериалы</span>
          </Link>
        </li>
        <li>
          <Link
            className={cn(
              cl.navigation__link,
              pathname === LINKS.tv ? cl.navigation__link_active : '',
            )}
            href={LINKS.tv}
          >
            <Icon
              name='common/tv'
              width='24'
              height='24'
            />
            <span>Тв-шоу</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
