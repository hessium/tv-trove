import dynamic from 'next/dynamic';

export const DynamicYoutubePlayer = dynamic(() =>
  import('./youtube-player').then((mod) => mod.YoutubePlayer),
);
