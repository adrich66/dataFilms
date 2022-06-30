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
function orderAlphabetically(array) {}

// Exercise 5: Order by year, ascending
function orderByYear() {}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

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
