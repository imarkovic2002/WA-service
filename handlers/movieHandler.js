import { movies } from "../models/movieModel.js"; 

function getMovie(id) {
    if(!id) {
        return movies;
    }
    return movies.find(x => x.id == id);
}

function getMovies(rating, name) {
    if(!rating && !name) {
        return movies;
    }
    return movies.find(x => x.rating == id || x.title == name);
}

function addMovies(newMovie) {
    movies.push(newMovie);
    return;
}

function updateMovie(id, newMovieData) {
    let oldMovieIdx = movies.findIndex(x => x.id == id);
    movies.splice(oldMovieIdx, 1, newMovieData);
    return newMovieData;
}

function updatePartOfMovie(id, newMovieData) {
    let oldMovie = movies.find(x => x.id == id);
    let movieDetailsToChange = Object.keys(newMovieData);
    for(let movieDetail of movieDetailsToChange) {
        if(oldMovie[movieDetail]) {
            oldMovie[movieDetail] = newMovieData[movieDetail];
        }
    }
    let oldMovieIdx = movies.findIndex(x => x.id == id);
    movies.splice(oldMovieIdx, 1, oldMovie);
    return oldMovie;
}

function deleteMovie(id) {
    let oldMovieIdx = movies.findIndex(x => x.id == id);
    movies.splice(oldMovieIdx, 1);
    return;
}

// Moji zadaci
function getMoviesName(){
    const titleMovie = movies.map((movies) => movies.title);
    return titleMovie;
}

function olderMovies(){
    const moviesOlder = movies.filter(movie => movie.rating > 9 );
    return moviesOlder;
}

export const methods = {
    getMovie,
    getMovies,
    addMovies,
    updateMovie,
    updatePartOfMovie,
    deleteMovie,
    getMoviesName, // Moja funkcija
    olderMovies, // Moja funkcija
}