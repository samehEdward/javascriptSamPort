// let students = ["sameh", "saly", "daniel", "david", "sarah"];

// students.forEach(cap);
// students.forEach(print);


// function cap(ele, i, arr)
// {
//     arr[i] = ele[0].toUpperCase() + ele.substring(1);
// }

// function print(ele){
//     console.log(ele);
// }

// const greeting = function(){
//     console.log("Hello Sameh");
// }

// greeting();


/////////////////////////////////////////////////////////////////////////////////////////////////

let counter = 0;

function deCrease(){
    counter -=1;

    document.getElementById("myLabel").innerHTML = counter;
}

function inCrease(){
    counter +=1;

    document.getElementById("myLabel").innerHTML = counter;
}


const procent = (x, y) => x / y *100;

console.log(`${procent(75, 100)}%`);

///////////////////////////////////////////////////////////

let grades = [100, 50, 70, 30, 33, 77];

grades.sort((x, y) => y-x);
grades.forEach((element) => console.log(element));




























