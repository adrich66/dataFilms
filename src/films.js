// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  //map is used to create a new array with only the keys of directors
  let result = array.map((movies) => movies.director);

  console.log('EXERCICE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  //filter is used to create a new array using the
  //prederteminated value with only the items of a certain film director
  let result = array.filter((movies) => movies.director === director);

  console.log('EXERCICE 2 ->', result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  //first of all we have to repeat the same as ex2
  let filtered = array.filter((movies) => movies.director === director);

  //reduce to simplify in only one value all the values of an array with the
  //same key, we need a initial in 0 because if not reduce takes the [0]
  const initial = 0;
  let result =
    (Math.round((
    filtered.reduce((previous, number) => previous + number.score, initial) /
    filtered.length)*100)/100);
  //Math.round to round out the result with two decimals 
  //but for accurate number -> *100 before and /100 after
  
  console.log('EXERCICE 3 ->', result);
  return result;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {

  //clone the array, we need to put the spread operator to 
  //duplicate it and without modification of the old one, then sort it
  const moviesClone = [...array];
  let orderedFilms = moviesClone.sort((movieA, movieB) => 
    movieA.title.localeCompare(movieB.title)
  );
  //creating an array with just the film titles and picking only 20
  let result = (orderedFilms.map((movies) => movies.title)).slice(0,20);
  console.log('EXERCICE 4 ->', result);
  return result;
  
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {

  //repeat the same than 4th to have an array ordered per name
  const moviesClone = [...array];
  //with a difference, the coditions for errors with strings
  const orderedFilms = moviesClone.sort((movieA, movieB) => {
    if (movieA.title > movieB.title) return 1;
    if (movieA.title < movieB.title) return -1;
  });
  //now ordering by year -> ascending 
  let result = orderedFilms.sort((movieA, movieB) => movieA.year - movieB.year);
 
  console.log('EXERCICE 5 ->', result);
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {

  //after copied and adapted all the exercise 3 it's needed
  //to have and if condition for the movies without score
  let filtered = array.filter((movies) =>{
    if (movies.genre.includes(genre) && movies.score != false) {
      return movies;
    }
  });
  const initial = 0;
  let result =
    (Math.round((
    filtered.reduce((previous, number) => previous + number.score, initial) /
    filtered.length)*100)/100);

  console.log('EXERCICE 6 ->', result);
  return result;
}


//Level 2 -> Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  //setting hours and minutes to 0 and declaration of newDuration
  let hours = 0, minutes = 0, newDuration;
  //same as before array.map for a new array and after that
  //split to separate the time strings 
  let result = array.map(movie => {
    newDuration = movie.duration.split(" ");
    //parseInt for the diferents times
    hours = parseInt(newDuration[0]);
    minutes = parseInt(newDuration[1]);
    //condition for set minutes to 0
    if (newDuration.length == 1){
      minutes = 0;
    }
    //total of time to change the hours to minutes and add minutes
    let total = hours * 60 + minutes;
    //returning the new durations
    return{
      ...movie,
      duration: total,
    };

  });
  console.log('EXERCICE 7 ->', result);
  return result;
}

// Level 3 -> Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {

  let result = [];
  console.log('EXERCICE 8 ->', result);
  return result;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
