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

export const sortByAvgRating = (data) => data.slice().sort((a,b) => b.average_rating - a.average_rating);

export const sortByTitle = (data) => data.slice().sort((a,b) => {
  const titleA = a.title.toUpperCase();
  const titleB = b.title.toUpperCase();
  if (titleA < titleB) {
    return -1;
  }
  if (titleA > titleB) {
    return 1;
  }
  return 0;
});