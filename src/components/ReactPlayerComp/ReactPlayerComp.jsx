import { useState } from 'react';
import ReactPlayer from 'react-player';
import store from 'store';

export const ReactPlayerComp = ({ id, link, width, height }) => {
  const [startPosition] = useState(() => {
    const startTime = store.get('video');
    return !startTime ? 0 : startTime[id];
  });

  const onProgress = ({ playedSeconds }) => {
    store.set('video', { ...store.get('video'), [id]: playedSeconds });
  };

  return (
    <ReactPlayer
      url={`https://cors-proxy.fringe.zone/${link}`}
      controls={true}
      pip={true}
      onProgress={onProgress}
      width={width}
      height={height}
      config={{
        file: {
          hlsOptions: {
            startPosition,
          },
        },
      }}
    />
  );
};
