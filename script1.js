'use strict';
/*
LECTURE: Functions
1. Write a function called 'describeCountry' which takes three parameters: 
'country', 'population' and 'capitalCity'. Based on this input, the 
function returns a string with this format: 'Finland has 6 million people and its 
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the 
returned values in 3 different variables, and log them to the console
*/

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`
}

const country1 = describeCountry("Finland", 6, "Helsinki");
console.log(country1);

const country2 = describeCountry("Nepal", 29, "Kathmandu");
console.log(country2);

const country3 = describeCountry("China", 999, "Beijing");
console.log(country3);