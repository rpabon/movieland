import { useState, useCallback } from "react";
import { ENDPOINT, API_KEY } from "../constants";

export const useTrailerKey = () => {
  const [trailerKey, setTrailerKey] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getTrailerKey = useCallback(async (movieId) => {
    const URL = `${ENDPOINT}/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos`;

    setIsLoading(true);
    setTrailerKey(null);
    setError(null);

    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error("Failed to fetch movie data");
      }

      const videoData = await response.json();
      const videos = videoData.videos.results || [];

      if (videos.length > 0) {
        const trailer = videoData.videos.results.find(
          (v) => v.type === "Trailer"
        );

        const trailerKey = trailer
          ? trailer.key
          : videoData.videos.results[0].key;

        setTrailerKey(trailerKey);
      } else {
        setError("No trailer available for this movie");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    trailerKey,
    isLoading,
    error,
    getTrailerKey,
  };
};
