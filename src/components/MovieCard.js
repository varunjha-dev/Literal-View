import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath, originalTitle }) => {
  if (!posterPath || !originalTitle) return null;

  const handleClick = () => {
    // Encode the movie title for URL
    const searchQuery = encodeURIComponent(originalTitle);

    // Choose the search URL (Google or YouTube)
    const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${searchQuery}+trailer in hindi or enlish only`;


    window.open(youtubeSearchUrl, "_blank");  // Open YouTube search
  };

  return (
    <div className="w-36 md:w-48 pr-4 cursor-pointer" onClick={handleClick}>
      <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
