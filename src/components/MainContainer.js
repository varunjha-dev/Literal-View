import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  const [iterations, setIterations] = useState(0); // To track number of iterations
  const [randomMovie, setRandomMovie] = useState(null); // To store the selected random movie

  useEffect(() => {
    // Only proceed if movies are available
    if (movies && movies.length > 0) {
      const getRandomMovie = () => {
        let count = 0;
        let movie;
        do {
          movie = movies[Math.floor(Math.random() * movies.length)];
          count++;
        } while (count < 12); // Stop after 12 iterations
        setRandomMovie(movie);
        setIterations(count);
      };

      getRandomMovie(); // Get random movie when movies are loaded
    }
  }, [movies]);

  // Fallback if movies array is empty
  if (!movies || movies.length === 0) return null;

  const { original_title, overview, id } = randomMovie || {};

  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};
export default MainContainer;