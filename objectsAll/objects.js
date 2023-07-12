/*
LECTURE: Introduction to Objects
1. Create an object called 'myCountry' for a country of your choice, containing
properties 'country', 'capital', 'language', 'population' and
'neighbours' (an array like we used in previous assignments)

2. Increase the country's population by two million using dot notation, and then
decrease it by two million using brackets notation.
*/
/*
const myCountry = {
    country: "Finland",
    capital: "Helsinki",
    language: "finnish",
    population: 6,
    neighbours: ["Norway", "Sweden", "Russia"]

};

console.log(`${myCountry.country} has ${myCountry["population"]} million ${myCountry["language"]}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry["capital"]}.`)


myCountry.population += 2;
console.log(myCountry.population);

myCountry["population"] -= 2;
console.log(myCountry["population"]);

*/


/*

LECTURE: Object Methods
1. Add a method called 'describe' to the 'myCountry' object. This method
will log a string to the console, similar to the string logged in the previous
assignment, but this time using the 'this' keyword.
2. Call the 'describe' method
3. Add a method called 'checkIsland' to the 'myCountry' object. This
method will set a new property on the object, called 'isIsland'.
'isIsland' will be true if there are no neighbouring countries, and false if
there are. Use the ternary operator to set the property.

*/

const myCountry = {
    country: "Finland",
    capital: "Helsinki",
    language: "finnish",
    population: 6,
    neighbours: ["Norway", "Sweden", "Russia"],

    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`)


    },

    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
    }
};
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);


/*

LECTURE: Iteration: The for Loop
1. There are elections in your country! In a small town, there are only 50 voters.
Use a for loop to simulate the 50 people voting, by logging a string like this to
the console (for numbers 1 to 50): 'Voter number 1 is currently voting'

*/

// for (let i = 1; i <= 50; i++) {
//     console.log(`Voter number ${i} is currently voting.`);
// }

/*
LECTURE: Looping Arrays, Breaking and Continuing
1. Let's bring back the 'populations' array from a previous assignment
2. Use a for loop to compute an array called 'percentages2' containing the
percentages of the world population for the 4 population values. Use the
function 'percentageOfWorld1' that you created earlier
3. Confirm that 'percentages2' contains exactly the same values as the
'percentages' array that we created manually in the previous assignment,
and reflect on how much better this solution is
*/

const percentageOfWorld1 = function (population) {
    return (population / 7900) * 100;
}
const populations = [10, 1441, 332, 83];
const percentage2 = [];

for (let i = 0; i < populations.length; i++) {
    percentage2.push(percentageOfWorld1(populations[i]));
}
console.log(percentage2)







