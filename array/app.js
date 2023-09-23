// let prices = [5, 7, 3, 111, 777, 137];

// for(let i = 0; i<prices.length; i+=1)
// {
//     console.log(prices[i]);
// }

// for(let price of prices){
//     console.log(price);
// }

/////////////////////////////////////////////////////////////////////////////

//let fruits = ["banana", "apple", "orange", "mango"];

//fruits = fruits.sort();

// fruits = fruits.sort().reverse();


// for(let fruit of fruits)
// {
//     console.log(fruit);
// }

////////////////////////////////////////////////////////////////////////////////

// 2D Array

let fruits =     ["apples", "oranges", "bananas"];
let vegetables = ["carrots", "onions", "potatoes"];
let meats =      ["eggs", "chiken", "fish"];

let groceryList = [fruits, vegetables, meats];

   console.log(groceryList[2][0]);

for(let list of groceryList)
{
    for(let one of list)
    {
        console.log(one);
    }
}

// let number = [7, 3, 111, 773, 173, 137];

// let maximum = Math.max(...number);

// console.log(maximum);