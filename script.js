//Ejercicio 1:	Print "Hello, World!" to the console.
/*console.log("Hola, Mundo")*/


//Ejercicio 2:	Declare and assign variables of different data types.
/*let nombre = ("Juan Pablo Zabala Gomez");
let edad = ("18");
let fechanacimiento = ("22 de mayo del 2006");
let lugarnacimiento = ("Bogotá")
console.log ("hola yo soy " + nombre + " tengo " + edad + " nací el " + fechanacimiento + " y soy de " + lugarnacimiento);*/


//Ejercicio 3:   Write a function that returns the sum of two numbers.
/*let numero1 = parseInt(prompt("Digita un numero"));
let numero2 = parseInt(prompt("Digita otro numero"));
let resultado = numero1 + numero2;
alert ("La suma de los dos numeros es: " + resultado);*/


//Ejercicio 4:	Create a function that checks if a number is even or odd.
/*let numero = parseInt(prompt("Digite el numero"));
let resultado = numero % 2
if (resultado === 0){
   alert ("El numero dijitado es par")
}else{
    alert ("El numero dijitado es impar")
}*/


//Ejercicio 5:	Write a loop that prints numbers from 1 to 10.
/*let limite = parseInt(prompt("Digite el número límite"));

for (let i = 1; i <= limite; i++) {
    console.log(i);
}*/


//Ejercicio 6:	Create an array and iterate through it using a loop.
/*let bucle = parseInt(prompt("Digite el número"));

for (let i = 1; i <= bucle; i++) {
    console.log(i);


//Ejercicio 7:	Write a function that reverses a string.
/*let texto = prompt("Escribe el texto")
let textoreverso = function(s) {
    return s.split("").reduce((rev, char)=> char + rev, '');
};
alert (textoreverso(texto));*/

//Ejercicio 8:	Create an object with properties and access them.
/*let otto ={
    es: "Un gato",
    come: "3 veses al día"
};
    otto.es = "Un elegfante";
    console.log (otto);*/


//Ejercicio 9:	Convert a string to uppercase.
/*let texto = prompt("Escribe el texto")
let textomayus = texto.toUpperCase();
alert (textomayus);*/


//Ejercicio 10:	Create a function that checks if a word is a palindrome.
/*let texto = prompt("Escribe el texto").toLowerCase().replace(/\s/g, '');//lovercase para que invisivilisar mayusculas el repace con las demas cosas sirve para eliminar los espacios

let textoreverso = (s) => s.split("").reduce((rev, char) => char + rev, '');

if (texto === textoreverso(texto)) {
    alert("Es un palíndromo.");
} else {
    alert("No es un palíndromo.");
}*/



//Ejercicio 11: Write a function that finds the largest number in an array.
/*
let numeros = [];
for (let i = 1; i <= 10; i++) {
    let num = Number(prompt("Digita el número " + i + ":"));
    numeros.push(num);
}

// Encontrar el número mayor
let maximo = Math.max(...numeros);

// Contar cuántas veces aparece el número máximo
let repeticiones = numeros.filter(num => num === maximo).length;

// Mostrar el resultado
if (repeticiones > 1) {
    alert("Hay dos o más números repetidos que son los mayores: " + maximo);
} else {
    alert("El número mayor es: " + maximo);
}*/



//Ejercicio 12: Implement a basic calculator using functions. 