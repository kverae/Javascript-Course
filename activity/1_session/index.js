// Ejercicio 1
import "./aboutme.js";
console.log("Ejercicio 1");

// Ejercicio 2

// Ejercicio 3

// Ejercicio 4
let divisiblesBy7 = [];
for (let i=1; i<=100; i++){
    if(i%7 == 0) 
        divisiblesBy7.push(i);
}

console.log("Numeros divisibles por 7: " + divisiblesBy7.toString());

// Ejercicio 5

// Ejercicio 6
let formatter = {
    prefix: "Hello ", 
    append: function(word){
        console.log(this.prefix + word);
    }
};

formatter.append("World"); // Result: Hello World

formatter.toLowerString = function(word){
    console.log(word.toLocaleLowerCase());
}
formatter.toLowerString("I'm Lucas"); // Result: i'm lucas

