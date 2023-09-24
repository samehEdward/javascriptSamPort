
let userName = "Sameh";
let userInbox = 0;

logIn();


function logIn()
{
    displayUserName();
    diplayUserInbox();
}

function displayUserName()
{
    console.log(`welcome : ${userName}`)
}

function diplayUserInbox()
{
    console.log(`You have ${userInbox} new message`);
}