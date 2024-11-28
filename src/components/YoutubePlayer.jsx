import React from "react";
import ReactPlayer from "react-player";
import { Modal } from "./Modal";

export const YoutubePlayer = ({ videoKey, onClose }) => {
  const url = `https://www.youtube.com/watch?v=${videoKey}`;

  return (
    <Modal isOpen={!!videoKey} onClose={onClose}>
      <ReactPlayer
        className="video-player"
        url={url}
        controls={true}
        playing={true}
        data-testid="youtube-player"
      />
    </Modal>
  );
};
