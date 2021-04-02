export const scrubMovieData = (fullListData) => {
  return fullListData.map((movie) => {
      const { backdrop_path, release_date, ...scrubbedMovie } = movie;
      return scrubbedMovie;
    }
  )
};


export const scrubDetailsData = (movieDetails) => {
  const { poster_path, ...scrubbedMovie } = movieDetails;
  return scrubbedMovie;
};