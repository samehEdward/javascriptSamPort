// callback = a function passed as an argument
//            to another function.

function sum(x, y, callBack)
{
    let result = x + y;
    callBack(result);
}

function displayConsol(output)
{
    console.log(output);
}

sum(2, 3,displayConsol);