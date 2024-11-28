import React from 'react';
import ReactPlayer from 'react-player';
import { Modal } from './Modal';
import styles from '../styles/youtubePlayer.module.scss';

export const YoutubePlayer = ({ videoKey, onClose }) => {
  const url = `https://www.youtube.com/watch?v=${videoKey}`;
  const isOpen = !!videoKey;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.wrapper}>
        <ReactPlayer
          data-testid="youtube-player"
          className={styles.player}
          url={url}
          width="100%"
          height="100%"
          controls
          playing
        />
      </div>
    </Modal>
  );
};
