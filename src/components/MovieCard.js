import React, { useState } from "react";
import { IMG_CDN_URL, API_PATHS } from "../utils/constants";

const MovieCard = ({ posterPath, originalTitle }) => {
  const [videoId, setVideoId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = async () => {
    // Encode the movie title for URL
    const searchQuery = encodeURIComponent(`${originalTitle} trailer`);

    // Use the defined API path to search on YouTube
    const youtubeSearchUrl = API_PATHS.searchOnYoutube(searchQuery);

    try {
      // Fetch YouTube data
      const response = await fetch(youtubeSearchUrl);
      const data = await response.json();

      if (data.items && data.items.length > 0) {
        // Get the first video's ID
        const videoId = data.items[0].id.videoId;
        setVideoId(videoId);
        setIsModalOpen(true); // Open the modal
      } else {
        console.error("No videos found.");
      }
    } catch (error) {
      console.error("Error fetching video:", error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setVideoId(null); // Reset video ID
  };

  if (!posterPath || !originalTitle) return null;

  return (
    <div>
      {/* Movie Card */}
      <div className="w-36 md:w-48 pr-4 cursor-pointer" onClick={handleClick}>
        <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
      </div>

      {/* Modal for YouTube Video */}
      {isModalOpen && videoId && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative w-11/12 md:w-3/4 h-3/4 bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={closeModal}
            >
              ✖
            </button>

            {/* Embedded YouTube Video */}
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
