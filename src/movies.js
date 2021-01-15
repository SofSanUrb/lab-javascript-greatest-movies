// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arr) {
    let nameDirect = arr.map(function (elem) {
        return elem.director
      })
      
      return nameDirect;
}

console.log(getAllDirectors(movies))
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function uniquifyArray(arr) {
  if (arr.length === 0) {
    return null;
  }
  else {
    let newArr = [];
    for (let p = 0; p < arr.length; p++) {
      
      if (!newArr.includes(arr[p])) { //if the new array does not include a word from the original array, push it
          newArr.push(arr[p])
        }

    }
    return newArr;
  }
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (arr) => {
    let stevenMovies = arr.filter(elem => elem.director === "Steven Spielberg" && elem.genre.includes("Drama"))
    
    return stevenMovies.length;
}

howManyMovies(movies)


// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
  if(arr.length === 0) {
    return 0
  }  
  let sum = arr.reduce((acc, elem) => {
        if(elem.rate) {
            return acc + elem.rate
          }
          else {
            return acc
          }}, 0)
    
    let average = sum/arr.length;
    return parseFloat(average.toFixed(2));
}
ratesAverage(movies)


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
  if(arr.length === 0) {
    return 0
  }

  const filterDrama = arr.filter(elem => elem.genre.includes("Drama")) 
  let average = ratesAverage(filterDrama);

  return average;
    
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
    }})
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
const turnHoursToMinutes = (arr) => {
  let cloneMovies = JSON.parse(JSON.stringify(arr));
  
  let durationNew = cloneMovies.map(elem => {
    let duration = elem.duration;
  
    if (duration.includes(" ")) {
      let time = duration.split(" ");
      let hoursMin = (Number((time[0].split("h"))[0]))*60;;
      let minutes = Number((time[1].split("min"))[0]);
      elem.duration = hoursMin + minutes;
    }
    else if (duration.includes("h")) {
      let hoursMin = (Number((duration.split("h"))[0]))*60;
      elem.duration = hoursMin;
    }
    else {
      let minutes = Number((duration.split("min"))[0]);
      elem.duration = minutes;
    }
    return elem
  })
  return durationNew;
}

turnHoursToMinutes(movies)
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
const bestYearAvg = (arr) => {
  if (arr.length === 0) {
    return null
  }
  //We create a new object that is empty
  let moviesByYear = {}

  arr.forEach(elem => {
    if(elem.year in moviesByYear) {
      moviesByYear[elem.year].push(elem);
    }
    else{
      moviesByYear[elem.year] = [];
      moviesByYear[elem.year].push(elem);
    }
  })
  let highestRating = 0;
  let year = 0;

  for (let yearExample in moviesByYear) {
    let average = ratesAverage(moviesByYear[yearExample])
    if(average > highestRating) {
      highestRating = average
      year = yearExample;
    }
  }

  return `The best year was ${year} with an average rate of ${highestRating}`
}

bestYearAvg(movies)