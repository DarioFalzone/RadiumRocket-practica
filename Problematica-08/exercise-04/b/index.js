// Uso funcion parseInt para que sean numeros enteros
// Me basé en info: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const age = parseInt(Math.random() * (0, 100));
document.write(`Age is: ${age}, you're `);

if (age < 2) document.write("Bebe");
else if (age >= 2 && age <= 12) document.write("Niño");
else if (age >= 13 && age <= 19) document.write("Adolecente");
else if (age >= 20 && age <= 30) document.write("Joven");
else if (age >= 31 && age <= 60) document.write("Adulto");
else if (age >= 61 && age <= 75) document.write("Adulto mayor");
else document.write("Anciano");
