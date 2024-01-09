// Deel 1: GET verschillende endpoints
//  generate API_Key in moviedb account and copy to variable API_KEY_TMDB:
// const API_KEY_TMDB = "add valid api key";
const API_KEY_TMDB = "9bfb12e3fc85d83e7b60892bafc16457";

/* 1. Maak een lijstje van alle beschikbare genres en hun corresponderende IDs van TheMovieDB */
const getMovieIdAndGenre = function (user) {
    return `genre naam: ${user.name}, id: ${user.id}` ;
}


const addMovieIdAndGenreToDOM = function(movie) {
    // Create HTML elements
    const movieList = document.getElementById('movieList');
    const movieListItem = document.createElement('li');
    const movieHeader = document.createElement('h4');

    // get genre data and add to textnode
    const dataToDisplay = getMovieIdAndGenre(movie);
    const movieTextElem = document.createTextNode(dataToDisplay);
    
    movieHeader.appendChild(movieTextElem);
    movieListItem.appendChild(movieHeader);
    movieList.appendChild(movieListItem);
};



const showMovieIdAndGenres = async function() {
    // Get list with all movie genres:    
    let urlToShowGenres = createUrlWithoutQueryString('https://api.themoviedb.org/3/', 'genre/movie/list', true)
    log(`urlToShowGenres: ${urlToShowGenres}`); 
    
    const users = await getData(urlToShowGenres);

    // Add genres to DOM
    users.genres.map(movie => addMovieIdAndGenreToDOM(movie));
    // for future reference: users contains object with array of (nested) objects.
};
// showMovieIdAndGenres();


/* 2. Haal 1 film op, op basis van de film ID met Postman (dus niet het genre ID) ⇒ (hoe kun je de ID achterhalen?). Gebruik het /find endpoint en lees het goed. */

const getFirstMovieTitle = function (movie) {
    return movie.movie_results[0].title ;
}

const addTopMovieToDOM = function(movie) {
    // Create HTML elements
    const movieList = document.getElementById('favoriteMovie');
    const movieListItem = document.createElement('li');
    const movieHeader = document.createElement('h4');

    // get genre data and add to textnode
    const movieIdAndGenre = getFirstMovieTitle(movie);
    const movieTextElem = document.createTextNode(movieIdAndGenre);
    
    movieHeader.appendChild(movieTextElem);
    movieListItem.appendChild(movieHeader);
    movieList.appendChild(movieListItem);
};



const showMyTopMovie = async function(movie_id) {
    // Get list with all movie genres:
    
    const urlToGetMyTopMovie = createUrlWithQueryString('https://api.themoviedb.org/3/', `find/${movie_id}`, 'language=en-US&external_source=imdb_id', true)
    
    let movie = await getData(urlToGetMyTopMovie);
    
    addTopMovieToDOM(movie);
    // console.log(movie)
};

// showMyTopMovie("tt0093779");



/* 3. Maak een nieuwe lijst met 10 Top Rated movies  
    De context mag je zelf kiezen: aller tijden (standaard), van de maand (extra params?), van 2019 (extra params?). */


const getMovieTitle = function (movie) {
    return movie.title;
}

const addMoviesToDOM = function(movie, targetClassOfListInDOM) {
    // Create HTML elements
    const movieList = document.getElementById(targetClassOfListInDOM);
    const movieListItem = document.createElement('li');
    const movieHeader = document.createElement('h4');

    const movieTitle = getMovieTitle(movie);
    const movieTextElem = document.createTextNode(movieTitle);
    
    movieHeader.appendChild(movieTextElem);
    movieListItem.appendChild(movieHeader);
    movieList.appendChild(movieListItem);
};


const showNumberOfTopRatedMovies = async function(numberOfMoviesToShow) {
    // Get list with all movie genres:
    const urlToGetNumberOfTopRatedMovies = createUrlWithQueryString('https://api.themoviedb.org/3/', `movie/top_rated`, 'language=en-US&external_source=imdb_id', true)
    const movies = await getData(urlToGetNumberOfTopRatedMovies);
    movies.results.length = numberOfMoviesToShow;
    movies.results.map(topMovie => addMoviesToDOM(topMovie, "topRatedMovies"));
};
// showNumberOfTopRatedMovies(10);


/* 4. Maak een nieuwe lijst met de beste films (top rated) binnen het genre action. Gebruik de Discover query. */

const showBestMoviesOfGenre = async function(genreId) {
    const urlToGetBestMoviesOfGenre = createUrlWithQueryString('https://api.themoviedb.org/3/', `discover/movie`, `sort_by=popularity.desc&with_genres=${genreId}`, true)
    const movies = await getData(urlToGetBestMoviesOfGenre);
    movies.results.map(topMovie => addMoviesToDOM(topMovie, "topRatedActionMovies"));
};
// showBestMoviesOfGenre(28);


/* Maak een nieuwe lijst met films uit het jaar 1975 */
const showMoviesOfYear = async function(releaseYear) {
    const urlToGetMoviesOfYear = createUrlWithQueryString('https://api.themoviedb.org/3/', `discover/movie`, `primary_release_year=${releaseYear}&sort_by=vote_average.desc`, true)
    const movies = await getData(urlToGetMoviesOfYear);    
    movies.results.map(topMovie => addMoviesToDOM(topMovie, "moviesOfYear"));
};
// showMoviesOfYear(1975);