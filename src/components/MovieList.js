import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="my-8">
      <h2 className="text-lg md:text-3xl py-4 text-white mb-4">{title}</h2>
      <div
        style={{
          display: "flex",
          overflowX: "scroll",
          WebkitOverflowScrolling: "touch",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
        className="space-x-4"
      >
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
              originalTitle={movie.original_title} 
            />
          ))}
        </div>
      </div>
      <style jsx>{` div::-webkit-scrollbar { display: none; } `}</style>
    </div>
  );
};

export default MovieList;
