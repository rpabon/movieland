import ReactPlayer from 'react-player';
import { Modal } from '@/components/Modal';
import { useSelectedMovie } from '@/hooks/useSelectedMovie';
import styles from '@/styles/youtubePlayer.module.scss';

export const YoutubePlayer = () => {
  const { trailerUrl, isModalOpen, closeMovieTrailerModal } = useSelectedMovie();

  return (
    <Modal isOpen={isModalOpen} onClose={closeMovieTrailerModal}>
      <div className={styles.wrapper}>
        <ReactPlayer
          data-testid="youtube-player"
          className={styles.player}
          url={trailerUrl}
          playing
          width="100%"
          height="100%"
          controls
        />
      </div>
    </Modal>
  );
};
