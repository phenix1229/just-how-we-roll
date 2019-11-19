/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];
// const sixResults = [];
// const doubleSixResults = [];
// const twelveResults = [];
// const twentyResults = [];

/*************************
 * RANDOM ROLL GENERATOR *
 *************************/


function getRandomNumber(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    
    return result;
}


/*******************
 * YOUR CODE BELOW *
 *******************/

function rollSix(){
    const result = getRandomNumber(6);
    sixes.push(result);
    return result;
}

function rollDoubleSix(){
    const result = getRandomNumber(12);
    sixes.push(result);
    return result;
}

function rollTwelve(){
    const result = getRandomNumber(12);
    sixes.push(result);
    return result;
}

function rollTwenty(){
    const result = getRandomNumber(20);
    sixes.push(result);
    return result;
}

function getMean(arr){
    const mean = arr.reduce(function(a,b){return a + b}, 0) / arr.length;
    return mean;
}

function getMedian(arr){
    const srtArr = arr.sort(function(a,b){return a - b});
    const mid1 = arr[srtArr.length / 2];
    const mid2 = arr[(srtArr.length / 2) -1];
    const middle = [mid1, mid2];

    if (arr.length % 2 === 0){
        median = getMean(middle);
    } else if (arr.length % 2 === 1){
        median = arr[(arr.length - 1) / 2]
    }

    return median;
}

function getMode(arr){
    
}

/*******************
 * EVENT LISTENERS *
 *******************/


/****************
 * MATH SECTION *
 ****************/


/*********
 * RESET *
 *********/
