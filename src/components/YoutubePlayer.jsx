import ReactPlayer from 'react-player'

/**
 * To comply with the task specifications, the react player instance
 * should be rendered inside a modal component that only opens and
 * closes when there is a videoKey selected/available.
 */
const YoutubePlayer = ({ videoKey }) => (<ReactPlayer 
  className="video-player" 
  url={`https://www.youtube.com/watch?v=${videoKey}`} 
  controls={true}
  playing={true}
  data-testid="youtube-player"
/>);

export default YoutubePlayer;