import React, { Component } from "react";
import SearchMovie from "./SearchMovie";
import MovieList from "./MovieList";
import { moviesData } from "./data";

class MovieApp extends Component {
  state = {
    search: "",
    minRating: 3,
    movieList: moviesData
  };

  //Add NewMovie
  addMovie = newMovie =>
    this.setState({
      movieList: [...this.state.movieList, newMovie]
    });

  //Handle Search Value
  handleSearch = valeur => this.setState({ search: valeur });

  //Handle minRating Value
  handleRating = rate => this.setState({ minRating: rate });

  render() {
    return (
      <div>
        <SearchMovie
          handleSearch={this.handleSearch}
          minRating={this.state.minRating}
          handleRating={this.handleRating}
        />

        <MovieList
          movieList={this.state.movieList.filter(
            movie =>
              movie.title
                .toLowerCase()
                .includes(this.state.search.toLowerCase().trim()) &&
              movie.rate >= this.state.minRating
          )}
          addMovie={this.addMovie}
        />
      </div>
    );
  }
}

export default MovieApp;
