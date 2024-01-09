const getMovieIdAndGenre = function (user) {
    return user.id + ' - ' + user.name ;
}

const addGenreToDOM = function(genre) {
    // Create HTML elements
    const movieList = document.getElementById('movieList');
    const movieListItem = document.createElement('li');
    const movieHeader = document.createElement('h4');

    // get genre data and add to textnode
    const movieIdAndGenre = getMovieIdAndGenre(genre);
    const movieTextElem = document.createTextNode(movieIdAndGenre);
    
    movieHeader.appendChild(movieTextElem);
    movieListItem.appendChild(movieHeader);
    movieList.appendChild(movieListItem);
};



const showGenres = async function() {
    // Get list with all movie genres:
    const users = await getData();

    // Add genres to DOM
    users.genres.map(genre => addGenreToDOM(genre));
    // for future reference: users contains object with array of (nested) objects.
};

showGenres();
