
var q = 0;
while (q < 100) { // will loop everytime that "q" is less then 100
    q = q + 2; // adds 2 to the "q" for every loop
    console.log(q)
}

console.log("Next Part ---------------------------------------")

var w = 100; // will loop everytime that "w" is more then or equal to 0
while (w >= 0) {
    console.log(w)
    w = w - 3; // subtracts 3 fpr every loop
}

console.log("Next Part ---------------------------------------")

for (e = 1; e <= 100; e++) { // loops untill "e" is more then 100
    console.log(e)
    e++; // adds 1 t0 "e"
}

console.log("Next Part ---------------------------------------")

for (e = 0; e <= 100; e++) {

    if(e%5 == 0 && e%3 == 0){ //checks if "e" is dividable by both 5 and 3 and if so prints HelloWorld
        console.log("HelloWorld")
    }
    else if(e%5 == 0){ //checks if "e" is dividable by 5
        console.log("World")
    }
    else if(e%3 == 0){ //checks if "e" is dividable by 3
        console.log("Hello")
    }
    else{ //if nothing else works then just prints number of e
        console.log(e)
    }
    
    
    
    
}