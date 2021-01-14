// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arr) {
    let nameDirect = arr.map(function (elem) {
        return elem.director})
    return nameDirect;
}

console.log(getAllDirectors(movies))
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (arr) => {
    let stevenMovies = arr.filter(elem => elem.director === "Steven Spielberg" && elem.genre.includes("Drama"))
    return stevenMovies.length;
}

howManyMovies(movies)
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
    let sum = arr.reduce((acc, elem) => {
        if(elem.rate) {
            return acc + elem.rate
            }
            else {
              return acc
            }}, 0)
    if(arr.length === 0) {
        return 0
    }
    let average = sum/arr.length;
    return parseFloat(average.toFixed(2));
}
ratesAverage(movies)
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
    const filterDrama = arr.filter(elem => elem.genre.includes("Drama"))
    let sum = filterDrama.reduce((acc, elem) => {
        if(elem.rate && elem.genre.includes("Drama")) {
            return acc + elem.rate
            }
            else {
              return acc
            }}, 0)
    if(arr.length === 0) {
        return 0
    }
    let average = sum/filterDrama.length;
    return parseFloat(average.toFixed(2));
}
dramaMoviesRate(movies)
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (arr) =>{
    let cloneMovies = JSON.parse(JSON.stringify(arr));
    return cloneMovies.sort((a, b) => {
    //sort by year
    if (a.year > b.year) {
      return 1; 
    } else if (a.year < b.year) {
      return -1;
    } 
    else {
        // a sort within a sort
        if (a.title > b.title) {
          return 1; 
        } else if (a.title < b.title) {
          return -1;
        } 
    }
    })
    }

orderByYear(movies)
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (arr) =>{
    let cloneMovies = JSON.parse(JSON.stringify(arr));
    let moviesTitle = cloneMovies.map(elem => elem.title)
    let sorted = moviesTitle.sort((a, b) => {
    //sort by year
    if (a > b) {
      return 1; 
    } else if (a < b) {
      return -1;
    } 
    else {
        return 0
    }
    })
    return sorted.slice(0,20);
    }
    

orderAlphabetically(movies)
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
