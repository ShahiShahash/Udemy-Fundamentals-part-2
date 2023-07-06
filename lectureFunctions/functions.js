/*
LECTURE: Function Declarations vs. Expressions
1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population 
represents. For example, China has 1441 million people, so it's about 18.2% of 
the world population
2. To calculate the percentage, divide the given 'population' value by 7900 
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, 
store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called 
'percentageOfWorld2', and also call it with 3 country populations (can be 
the same populations)
*/

// 1.Function declaration;

function percentageOfWorld1(population, country) {
    const worldPopulation = 7900;
    const percentage = (population / worldPopulation) * 100;
    return `${country} has ${population} million people, so it's about ${percentage} of the world population`;
}
const country1 = (percentageOfWorld1(10, "Portugal"));
const country2 = (percentageOfWorld1(1441, "China"));
const country3 = (percentageOfWorld1(332, "USA"));
console.log(country1, country2, country3);


// 2.Function Expressions;

const percentageOfWorld2 = function (population, country) {
    return `${country} has ${population} million people, so it's about ${(population / 7900) * 100} of the world population`;
}
const percPortugal = percentageOfWorld2(10, "Portugal");
const percChina = percentageOfWorld2(1441, "China");
const percUSA = percentageOfWorld2(332, "USA");
console.log(percPortugal, percChina, percUSA);