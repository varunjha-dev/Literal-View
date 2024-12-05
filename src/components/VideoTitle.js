const VideoTitle = ({ title, overview }) => {
    return (
      <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-2xl md:text-6xl font-bold ">{title}</h1>
        <p className="hidden md:block py-4 text-xl text-gray-200 leading-relaxed w-full sm:w-3/5">{overview}</p>
          <div className="mt-24 md:mt-0">
          <button className=" bg-gradient-to-r from-green-400 to-gray-700 text-white py-3 px-8 text-lg rounded-full shadow-md transition duration-300 transform hover:scale-105 hover:shadow-lg">
            Play ⏯️
          </button>
          <button className="mx-2 bg-gray-700 text-white py-3 px-8 text-lg rounded-full shadow-md transition duration-300 transform hover:bg-gray-600 hover:scale-105 hover:shadow-lg">
            More Info ℹ️
          </button>
          </div>
      </div>
    ); 
  };
  export default VideoTitle;