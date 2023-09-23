
document.getElementById("calcButton").onclick = function(){

    if(document.getElementById("cel").checked){

        let temp;
        temp = document.getElementById("inputTemp").value;

        temp = Number(temp);
        temp = clacCelsius(temp);
        document.getElementById("result").innerHTML = temp + "°C"

    }
    else if(document.getElementById("fah").checked){
        let temp;
        temp = document.getElementById("inputTemp").value;

        temp = Number(temp);
        temp = calcFahrenheit(temp);
        document.getElementById("result").innerHTML = temp + "°F"
    }
    else[
        document.getElementById("result").innerHTML = "Select Temprature type"
    ]
}

function clacCelsius(temp){
    return (temp - 32) * (5/9);
}

function calcFahrenheit(temp){
    return temp * 9 / 5 + 32;
}