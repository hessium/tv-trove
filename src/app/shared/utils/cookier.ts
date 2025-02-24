import { COOKIES } from '@/app/shared/constants/cookies';

export interface SetCookieProps {
  name: string;
  value: string;
  options?: Record<string, unknown>;
}

type ParseCookiesProps = Record<string, string>;

class Cookier {
  set = ({ name, value, options = {} }: SetCookieProps) => {
    if (typeof document === 'undefined') {
      return;
    }
    options = {
      path: '/',
      ...options,
    };

    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }

    let updatedCookie =
      encodeURIComponent(name) + '=' + encodeURIComponent(value);

    for (const optionKey in options) {
      updatedCookie += '; ' + optionKey;
      const optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += '=' + optionValue;
      }
    }

    // eslint-disable-next-line unicorn/no-document-cookie
    document.cookie = updatedCookie;
  };

  get = (name: string): string | undefined => {
    if (typeof document === 'undefined') {
      return;
    }
    const matches = document.cookie.match(
      new RegExp(
        '(?:^|; )' +
          name.replaceAll(/([$()*+./?[\\\]^{|}])/g, '\\$1') +
          '=([^;]*)',
      ),
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  };

  remove = (name: string) => {
    this.set({ name: name, options: { 'max-age': -1 }, value: '' });
  };

  setToken = (token: string) => {
    this.remove(COOKIES.authToken);

    const expires = new Date(new Date().setMonth(new Date().getMonth() + 1));

    this.set({
      name: COOKIES.authToken,
      options: { expires },
      value: token,
    });
  };

  parse = (
    cookies: string,
    cookieName: string,
    parse?: boolean,
  ): string | null => {
    const cookie: ParseCookiesProps = {};
    const cookieArr = cookies.split(';');

    for (const el of cookieArr) {
      const [key, value] = el.split('=');

      cookie[key.trim()] = value;
    }

    if (parse) {
      return JSON.parse(cookie[cookieName] ?? 'null');
    }

    return cookie[cookieName] ?? null;
  };

  getToken = (c = '') => this.parse(c, COOKIES.authToken);
}

export const cookier = new Cookier();
