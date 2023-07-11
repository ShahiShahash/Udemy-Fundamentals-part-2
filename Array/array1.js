/*
LECTURE: Introduction to Arrays
1. Create an array containing 4 population values of 4 countries of your choice.
You may use the values you have been using previously. Store this array into a
variable called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false)
3. Create an array called 'percentages' containing the percentages of the
world population for these 4 population values. Use the function
'percentageOfWorld1' that you created earlier to compute the 4
percentage values
*/

const population = new Array(10, 1441, 332, 10);
if (population.length === 4) {
    console.log(true);
} else {
    console.log(false);
}

const percentageOfWorld1 = function (population) {
    return (population / 7900) * 100;
}

const percPortugal = percentageOfWorld1(10);
const percChina = percentageOfWorld1(1441);
const percUSA = percentageOfWorld1(332);
const percNepal = percentageOfWorld1(29);
console.log(percPortugal, percChina, percUSA);

const percentages = [percPortugal, percChina, percUSA, percNepal];
console.log(percentages);

/*
LECTURE: Basic Array Operations (Methods)
1. Create an array containing all the neighbouring countries of a country of your
choice. Choose a country which has at least 2 or 3 neighbours. Store the array
into a variable called 'neighbours'
2. At some point, a new country called 'Utopia' is created in the neighbourhood of
your selected country. So add it to the end of the 'neighbours' array
3. Unfortunately, after some time, the new country is dissolved. So remove it from
the end of the array
4. If the 'neighbours' array does not include the country ‘Germany’, log to the
console: 'Probably not a central European country :D'
5. Change the name of one of your neighbouring countries. To do that, find the
index of the country in the 'neighbours' array, and then use that index to
change the array at that index position. For example, you can search for
'Sweden' in the array, and then replace it with 'Republic of Sweden'.
*/

const neighbours = ["India", "China", "Bhutan"];
console.log(neighbours)
neighbours.push('Utopia');
neighbours.pop();
if (neighbours.includes("Germany")) {
    console.log("Germany found: D");
} else {
    console.log('Probably not a central European country :D');
}
neighbours[0] = "Sweden";
neighbours[1] = "Pakistan";
neighbours[2] = "Maldives";

if (!neighbours.includes("India")) {
    console.log("India is shit country: )");
}

console.log(neighbours);
