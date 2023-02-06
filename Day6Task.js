class Movie {
    constructor(title= '', studio = '', rating = 'PG') {
       this.title = title;
       this.studio = studio;
       this.rating = rating;
    }
 
    getPG(movies = [], rating = '') {
       return movies.filter((m) => m.rating === rating);
    }
}
 
const casionRoyaleMovie = new Movie('Casino Royale', 'Eon Productions', 'PG13', 'Action/Adventure');
const leo = new Movie('Leo', 'LCU', 'PG', 'R');
const vikram = new Movie('Vikram', 'Vijay', 'PG', 'Action');
const avatar = new Movie('Avatar: The water way', 'EROS', 'PG13', 'R');
const avengers = new Movie('The avengers: End Game', 'LCU', 'PG', 'Action');
 
const moviesArray = [casionRoyaleMovie, leo, vikram, avatar, avengers];
 
console.log(casionRoyaleMovie.getPG(moviesArray, 'PG'));

///////////////////////////////////////////////////////////////////////////////////////////////////////////

class Movie {
    constructor(title= '', studio = '', overview = 'R') {
       this.title = title;
       this.studio = studio;
       this.overview = overview;
    }
    getR(movies = [], overview = '') {
       return movies.filter((m) => m.overview === overview);
    }
}
 
const casionRoyaleMovie = new Movie('Casino Royale', 'Eon Productions', 'PG13', 'Adventure');
const leo = new Movie('Leo', 'LCU', 'PG', 'R');
const vikram = new Movie('Vikram', 'Vijay', 'PG', 'Action');
const avatar = new Movie('Avatar: The water way', 'EROS', 'PG13', 'R');
const avengers = new Movie('The avengers: End Game', 'LCU', 'PG', 'Action');
 
const moviesArray = [casionRoyaleMovie, leo, vikram, avatar, avengers];
 
console.log(casionRoyaleMovie.getR(moviesArray, 'R'));

