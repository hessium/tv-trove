import React, { useState, useEffect } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import './youtube-player.scss';

interface PlayerProps {
  videoId: string;
  width?: string;
  height?: string;
  isActive?: boolean;
}

export const YoutubePlayer = ({
  videoId,
  width = '500',
  height = '300',
  isActive = false,
}: PlayerProps) => {
  const [hasError, setHasError] = useState(false);
  const [player, setPlayer] = useState<any>(null);

  const opts = {
    height: { height },
    width: { width },
    playerVars: {
      autoplay: 0,
      controls: 0,
    },
    playing: false,
    muted: true,
  };

  useEffect(() => {
    if (hasError) return;
    if (player) {
      if (isActive) {
        player.playVideo();
      } else {
        player.stopVideo();
      }
    }
  }, [isActive, player, hasError]);

  const onError: YouTubeProps['onError'] = () => {
    setHasError(true);
  };

  const onReady: YouTubeProps['onReady'] = (event) => {
    setPlayer(event.target);
    if (isActive) {
      event.target.playVideo();
    }
  };

  if (hasError) {
    return null;
  }

  return (
    <YouTube
      videoId={videoId}
      opts={opts}
      onError={onError}
      onReady={onReady}
      className='youtube-player'
    />
  );
};
