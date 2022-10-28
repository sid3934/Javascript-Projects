var convertType = "miles";
var heading = document.querySelector("h1");
var intro = document.querySelector("p");
var ansDiv = document.getElementById("answer");
var form = document.getElementById("convert");

document.addEventListener('keydown', function(event){
    var key = event.code;
    // alert(key);
    if(key=='KeyK'){
        //change the heading
        heading.innerHTML = "Kilometers to miles converter";
        // change the intro paragraph
        intro.innerHTML = "Type in the number in kilometers and press convert distance to get the corresponding mile value";
        //change the value of var convertType
        convertType = "kilometers";
    }else if(key=='KeyM'){
        heading.innerHTML = "miles to kilometers converter";
        intro.innerHTML = "Type in the number in miles and press convert distance to get the corresponding kilometer value" ;
    }
});

form.addEventListener('submit', function(event){
    event.preventDefault(); //this will prevent the php form from getting submitted
    var distance = parseFloat(document.getElementById('distance').value);
    if(distance){
        if(convertType == "kilometers"){
            var converted = (distance*0.6213711).toFixed(3);
            answer.innerHTML = `${distance} kilometers converts to ${converted} miles`;
        }else{
            var converted = (distance*1.609344).toFixed(3);
            answer.innerHTML = `${distance} miles converts to ${converted} kilometers`;
        }
        
    }else{
        answer.innerHTML = "<h2>Variable needs a numeric input.</h2>";
    }
}); //we didnt use document.geteventlistnener because we already have document.getelementById in a variable so makes sense to target it directly 

/**
document.getElementById('convert').addEventListener('submit', function(evt){
    evt.preventDefault();
    
    var dist = parseFloat(document.getElementById('distance').value);
    var ans = document.getElementById('answer');
    if(distance){
        var conversion = (dist*1.6).toFixed(3);
        ans.innerHTML = <h2>${dist} miles convert to ${conversion} in km </h2> 
    }else{
        ans.innerHTML = <h2>Pleae input a number!</h2>
    }
}); **/