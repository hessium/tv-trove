/** @type {import('next').NextConfig} */

import svg from '@neodx/svg/webpack';

const nextConfig = {
  reactStrictMode: false,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        svg({
          root: 'assets/icons',
          output: 'public/images/svg-sprites',
          group: true,
          fileName: '{name}.{hash:8}.svg',
          metadata: {
            path: 'src/shared/types/icon.ts',
            runtime: {
              viewBox: true,
            },
          },
        }),
      );
    }

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kinopoiskapiunofficial.tech',
        port: '',
        pathname: '/images/posters/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
