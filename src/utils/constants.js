import LogoLV from './LOGO_LV.png';

export const LOGO = LogoLV;
export const USER_AVATAR =
  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/IN-en-20241125-TRIFECTA-perspective_a47db038-756f-4f26-b1f7-cfc882b98746_large.jpg";
  
export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

// Base API endpoints
export const API_ENDPOINT = "https://api.themoviedb.org/3";
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";
export const IMG_ORIGINAL_URL = "https://image.tmdb.org/t/p/original";

// API paths for various movie-related requests
export const API_PATHS = {
  fetchAllCategories: `${API_ENDPOINT}/genre/movie/list`,
  fetchMoviesList: (id) => `${API_ENDPOINT}/discover/movie?with_genres=${id}`,
  fetchNowPlaying: `${API_ENDPOINT}/movie/now_playing`,
  searchOnYoutube: (query) =>
    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
};

// Supported languages for the app
export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

// External API keys
export const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
