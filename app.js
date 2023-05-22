console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count = 0)
{
    if (count >= 0) {
        for (let i = 0; i <= count; i++) {
            if ((i % 2 == 0) != true) {
                console.log(i);
                continue;
            }
        }
    }
    else if (count <= -1)
    {
        for (let i = 0; i >= count; i--)
        {
            if ((i % 2 == 0) != true)
            {
                console.log(i);
            }
        }
    }

}
printOdds(15);
printOdds(-15);
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function greetings(name = "friend", age)
{
    console.log(`Hello, ${name}!`)
}

function checkAge(userName = "friend", age = -1)
{
    if (age >= 16) {
        let aboveSixteen = `Congrats ${userName}, you can drive!`;
        console.log(aboveSixteen);
    }
    else if (age < 16 && age >= 0) {
        let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
        console.log(belowSixteen);
    }
    else
    {
        let incorrectVarAge = `Sorry ${userName}, please use a number 0 or higher for your age!`;
        console.log(incorrectVarAge);
    }

}

// Exercise 3
console.log("EXERCISE 3:\n==========\n");

function whereOnTheGraph(x, y) {
    if (x == 0) {
        console.log(`Point (${x},${y}) is on the y axis.`);
       
    }
    else if (y == 0) {
        console.log(`Point (${x}, ${y}) is on the x axis.`);
      
    }
    else if (x > 0 && y > 0) {
        console.log(`Point (${x}, ${y}) is in quadrant 1`);
       
    }
    else if (x > 0 && y < 0) {
        console.log(`Point (${x}, ${y}) is in quadrant 4`);

    }
    else if (x < 0 && y < 0) {
        console.log(`Point (${x}, ${y}) is in quadrant 3`);
       
    }
    else if (x < 0 && y > 0) {
        console.log(`Point (${x}, ${y}) is in quadrant 2`);

    }
    else {
        console.log("Please add a valid point.")
    }

    
}

// Exercise 4
console.log("EXERCISE 4:\n==========\n");

function triangleType(a = null, b = null, c = null)
{
    if (a == null || b == null || c == null) {
        console.log("Please use three valid positive numbers for your triangle.")
    }
    else if (a <= 0 || b <= 0 || c <= 0) {
        console.log("Please use three valid positive numbers for your triangle.")
    }
    else if (a + b <= c || a + c <= b || b + c <= a) {
        console.log(`Sides ${a}, ${b}, and ${c} make an invalid triangle.`)
    }
    else if (a == b && b == c) {
        console.log(`Sides ${a}, ${b}, and ${c} make an equilateral triangle.`)
    }
    else if (a == b || a == c || b == c) {
        console.log(`Sides ${a}, ${b}, and ${c} make an isosceles triangle.`)
    }
    else if (a != b && a != c && b != c)
    {
        console.log(`Sides ${a}, ${b}, and ${c} make a scalene triangle.`)
    }
}

// Exercise 5
console.log("EXERCISE 4:\n==========\n");
function dataPlanStatus(planLimit, day, usage)
{
    if (planLimit > 0 && day <= 30 && day > 0 && usage >= 0) {
        let amountAveragedPerDay = usage / day;
        let recommendedDailyUse = planLimit / 30;
        let estimatedAmountOver = amountAveragedPerDay * 30;
        let daysLeft = 30 - day;
        let dataLeft = planLimit - usage;
        let newRecommendedDailyAverage = dataLeft / daysLeft;

        if (recommendedDailyUse < amountAveragedPerDay) {
            console.log(`${day} days used, ${daysLeft} days remaining.`);
            console.log(`Average daily use: ${amountAveragedPerDay} GB / day`);
            console.log(`You are EXCEEDING your recommended daily use of ${recommendedDailyUse} GB / day`);
            console.log(`Continuing this heavy use, you will exceed your data plan by ${estimatedAmountOver} GB.`)
            console.log(`To stay below your data plan, use no more than ${newRecommendedDailyAverage} GB / day for the rest of this cycle.`)
        }
        if (recommendedDailyUse >= amountAveragedPerDay) {
            console.log(`${day} days used, ${daysLeft} days remaining.`);
            console.log(`Average daily use: ${amountAveragedPerDay} GB / day`);
            console.log(`You are at or below your recommended daily use of ${recommendedDailyUse} GB / day`);
            console.log(`To stay below your data plan, use no more than ${newRecommendedDailyAverage} GB / day for the rest of this cycle.`)
        }
    }
    else
    {
        console.log("Please insert valid numbers.");
    }
    
}
dataPlanStatus(100, 5, 1);
dataPlanStatus(5, 6, 3);
dataPlanStatus();

//BONUS Exercise 5: Data Plan Status
//Write a function that will display feedback on cell phone data usage.Cell phone plans for this particular company give you a certain amount of data every 30 days which must be used or they are lost(no rollover).We want to track the average amount of data used per day and inform the user if they are using too much data or can afford to use more.

//Write a function that accepts the following parameters:

//planLimit: amount of data in the plan per 30 day period
//day: the current day in the 30 day period
//usage: the total amount of data used so far
//The function should compute whether the user is over, under, or right on the average daily usage under the plan.It should also inform them of how much data is left and how much, on average, they can use per day for the rest of the month.If they’ve run out of data, it should inform them of that too.

//For example, if the user enters planLimit = 100, day = 15, and usage = 56, your program should print out something similar to the following.

//15 days used, 15 days remaining
//Average daily use: 3.333 GB / day
//You are EXCEEDING your average daily use(3.73 GB / day),
//    continuing this high usage, you'll exceed your data plan by
//11.9 GB.
//To stay below your data plan, use no more than 2.93 GB / day