import React from "react";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";

function MovieList(props) {
  return (
    <div className="movie-list-container">
      {props.movieList.map((film, i) => (
        <MovieCard key={i} movie={film} />
      ))}
      <AddMovie addMovie={props.addMovie} />
    </div>
  );
}

export default MovieList;
