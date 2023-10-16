// FRUSTRADO
// no me sale nada

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let onlyDirectors = moviesArray.map((eachMovie) => {
        return eachMovie.director
} )

return onlyDirectors
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    // let count = 0
    if (moviesArray.length === 0) {
        return 0
    }
    let filterMovies = moviesArray.filter((dramaFilms)=>{
        return dramaFilms.director === "Steven Spielberg" && dramaFilms.genre.includes("Drama");
    })
    return filterMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray){ 
   
    if (moviesArray.score !== 0) {
        return 0}

        
        let totalScore = moviesArray.reduce((acc, eachAverage)=>{
            let = averageScore = totalScore / moviesArray.length;
            let scoreAv = totalScore / moviesArray.length;
            let scoreRounded = scoreAv.toFixed(2); 
        
        }, 0)
        return scoresAverage(scoreRounded)
    }
    // return scoresAverage.toFixed(2);


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
// let sortedMovies = movies.slice();
    
    let cloneMovies = JSON.parse( JSON.stringify(moviesArray));

    cloneMovies.sort((elemen1, elemen2) =>{
        if (elemen1.year < elemen2.year){
            return [1]
        }
        else if (elemen1.year > elemen2.year) {
            return [-1]
        }
        else {
            return [0]
        }
    })
    return orderByYear(moviesArray)
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    
    let cloneAlpha = JSON.parse( JSON.stringify(moviesArray));
    
    cloneAlpha.sort((elementos1, elementos2)=> {
        let comparacion = elementos1.title.localeCompare(elementos2.title);
        let primeroVeinte = cloneAlpha.slice(0,19);


    })
}







// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
