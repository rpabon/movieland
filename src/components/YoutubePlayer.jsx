import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { Modal } from './Modal';
import { useSelectedMovie } from '../hooks/useSelectedMovie';
import styles from '../styles/youtubePlayer.module.scss';

export const YoutubePlayer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { trailerKey } = useSelectedMovie();
  const url = `https://www.youtube.com/watch?v=${trailerKey}`;

  useEffect(() => {
    setIsOpen(!!trailerKey);
  }, [trailerKey]);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.wrapper}>
        <ReactPlayer
          data-testid="youtube-player"
          className={styles.player}
          url={url}
          playing={isOpen}
          width="100%"
          height="100%"
          controls
        />
      </div>
    </Modal>
  );
};
