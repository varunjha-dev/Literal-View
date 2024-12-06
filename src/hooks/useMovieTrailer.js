import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getMovieVideos = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();

      // Ensure json.results exists and is an array before applying .filter()
      if (json.results && Array.isArray(json.results)) {
        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0]; // Fallback to the first video if no trailers found
        dispatch(addTrailerVideo(trailer));
      } else {
        console.error("Invalid response format:", json);
      }
    } catch (error) {
      console.error("Error fetching movie videos:", error);
    }
  };

  useEffect(() => {
    if (!trailerVideo || trailerVideo?.movieId !== movieId) {
      getMovieVideos(); // Fetch new trailer video if it's not already in the store or if the movieId changes
    }
  }, [movieId, trailerVideo, dispatch]); // Trigger effect when movieId or trailerVideo changes
};

export default useMovieTrailer;
