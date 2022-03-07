// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const firstTwo = drivers.slice(0,2);
const lastTwo = drivers.slice(-2);

// console.log(firstTwo);
// console.log(lastTwo);

function returnFirstTwoDrivers(){
    return firstTwo;
    console.log(firstTwo)
}
function returnLastTwoDrivers(){
    return lastTwo;
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare){
     return function(){
            return fare * fare;
     }
}

let fareDoubler = fare => fare*2;
let fareTripler = fare => fare*3;

function selectDifferentDrivers(driverNames, variable){
    if (returnFirstTwoDrivers === variable){
        return firstTwo; 
    }else if (returnLastTwoDrivers === variable){
        return lastTwo;
    }
}

