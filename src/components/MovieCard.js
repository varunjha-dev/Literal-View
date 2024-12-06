import { IMG_CDN_URL, API_PATHS } from "../utils/constants";

const MovieCard = ({ posterPath, originalTitle }) => {
  if (!posterPath || !originalTitle) return null;

  const handleClick = async () => {
    // Encode the movie title for URL
    const searchQuery = encodeURIComponent(`${originalTitle} trailer in Hindi or English only`);

    // Use the defined API path to search on YouTube
    const youtubeSearchUrl = API_PATHS.searchOnYoutube(searchQuery);

    try {
      // Make the API call to YouTube
      const response = await fetch(youtubeSearchUrl);
      const data = await response.json();

      if (data.items && data.items.length > 0) {
        // Get the first video's ID
        const videoId = data.items[0].id.videoId;
        const videoUrl = `https://www.youtube.com/watch?v=${videoId}&autoplay=1`;

        // Open the video in a new tab
        window.open(videoUrl, "_blank");
      } else {
        // Fallback: Open a generic YouTube search if no video is found
        const fallbackUrl = `https://www.youtube.com/results?search_query=${searchQuery}`;
        window.open(fallbackUrl, "_blank");
      }
    } catch (error) {
      console.error("Error fetching video:", error);

      // Fallback to opening the YouTube search page in case of an error
      const fallbackUrl = `https://www.youtube.com/results?search_query=${searchQuery}`;
      window.open(fallbackUrl, "_blank");
    }
  };

  return (
    <div className="w-36 md:w-48 pr-4 cursor-pointer" onClick={handleClick}>
      <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
