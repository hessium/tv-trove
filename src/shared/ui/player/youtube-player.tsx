import React, { useState } from 'react';
import './youtube-player.scss';

interface PlayerProps {
  videoId: string | undefined;
}

export const YoutubePlayer = ({
  videoId,
}: PlayerProps) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !videoId) {
    return null;
  }

  const src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=0&controls=1&modestbranding=1&rel=0&showinfo=0&fs=1&origin=${window.location.origin}&enablejsapi=0&playsinline=1&iv_load_policy=3&cc_load_policy=0&disablekb=0&hl=ru`;

  return (
    <div className="youtube-player-wrapper">
      <iframe
        src={src}
        className="youtube-player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onError={() => setHasError(true)}
      />
    </div>
  );
};
