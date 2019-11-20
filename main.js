/**********
 * DATA *
 **********/


const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];
const sixCounts = [0,0,0,0,0,0];
const dSixCounts = [0,0,0,0,0,0,0,0,0,0,0,0];
const twelveCounts = [0,0,0,0,0,0,0,0,0,0,0,0];
const twentyCounts = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
const d6pic = document.querySelector('#d6-roll');
const dd6pic1 = document.querySelector('#double-d6-roll-1');
const dd6pic2 = document.querySelector('#double-d6-roll-2');
const d12pic = document.querySelector('#d12-roll');
const d20pic = document.querySelector('#d20-roll');
const d6mean = document.querySelector('#d6-rolls-mean');
const d6median = document.querySelector('#d6-rolls-median');
const dd6mean = document.querySelector('#double-d6-rolls-mean');
const dd6median = document.querySelector('#double-d6-rolls-median');
const dd6mode = document.querySelector('#double-d6-rolls-mode');
const d6mode = document.querySelector('#d6-rolls-mode');
const d12mean = document.querySelector('#d12-rolls-mean');
const d12median = document.querySelector('#d12-rolls-median');
const d12mode = document.querySelector('#d12-rolls-mode');
const d20mean = document.querySelector('#d20-rolls-mean');
const d20median = document.querySelector('#d20-rolls-median');
const d20mode = document.querySelector('#d20-rolls-mode');
const reset = document.querySelector('#reset-button');


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
    sixCounts[result -1]++;
    d6pic.src = `./images/d6/${result}.png`;
    d6mean.innerText = getMean(sixes);
    d6median.innerText = getMedian(sixes);
    d6mode.innerText = getMode(sixCounts);
}

function rollDoubleSix(){
    const result1 = getRandomNumber(6);
    const result2 = getRandomNumber(6);
    const total = Number(result1) + Number(result2);
    doubleSixes.push(total);
    dSixCounts[total -1]++;
    dd6pic1.src = `./images/d6/${result1}.png`;
    dd6pic2.src = `./images/d6/${result2}.png`;
    dd6mean.innerText = getMean(doubleSixes);
    dd6median.innerText = getMedian(doubleSixes);
    dd6mode.innerText = getMode(dSixCounts);
}

function rollTwelve(){
    const result = getRandomNumber(12);
    twelves.push(result);
    twelveCounts[result -1]++;
    d12pic.src = `./images/numbers/${result}.png`;
    d12mean.innerText = getMean(twelves);
    d12median.innerText = getMedian(twelves);
    d12mode.innerText = getMode(twelveCounts);
}

function rollTwenty(){
    const result = getRandomNumber(20);
    twenties.push(result);
    twentyCounts[result -1]++;
    d20pic.src = `./images/numbers/${result}.png`;
    d20mean.innerText = getMean(twenties);
    d20median.innerText = getMedian(twenties);
    d20mode.innerText = getMode(twentyCounts);
}


/*******************
 * EVENT LISTENERS *
 *******************/


d6pic.addEventListener('click', rollSix);
dd6pic1.addEventListener('click', rollDoubleSix);
d12pic.addEventListener('click', rollTwelve);
d20pic.addEventListener('click', rollTwenty);
reset.addEventListener('click', initialState);
window.addEventListener('load', initialState);


/****************
 * MATH SECTION *
 ****************/


function getMean(arr){
    const mean = arr.reduce(function(a,b){return a + b}, 0) / arr.length;
    return mean.toFixed(2);
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

    return median.toFixed(2);
}

function getMode(arr){
    return (arr.indexOf(Math.max(...arr)) + 1);
}


/*********
 * RESET *
 *********/


function initialState(){
    d6pic.src = './images/start/d6.png';
    dd6pic1.src = './images/start/d6.png';
    dd6pic2.src = './images/start/d6.png';
    d12pic.src = './images/start/d12.jpeg';
    d20pic.src = './images/start/d20.jpg';
    d6mean.innerText = '';
    d6median.innerText = '';
    d6mode.innerText = '';
    dd6mean.innerText = '';
    dd6median.innerText = '';
    dd6mode.innerText = '';
    d12mean.innerText = '';
    d12median.innerText = '';
    d12mode.innerText = '';
    d20mean.innerText = '';
    d20median.innerText = '';
    d20mode.innerText = '';
}