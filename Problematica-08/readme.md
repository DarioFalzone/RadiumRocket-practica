# NOTAS:

Para poder ejecutar los ejercicios en pantalla, cambiar la ruta apuntando al nombre de archivo correspondiente a los ejercicios.

* Ejemplo:
		<script src="../script-01/a"></script> //Ejercicio 1) a)

# Descripción
Se deben resolver cada uno de los siguientes ejercicios y subirlos a un nuevo repositorio en Github.
Por favor resolverlos en el orden planteado y hacer un commit por cada ejercicio resuelto.
Agregar el enunciado de cada ejercicio como comentario en la solución del mismo.

# Listado de ejercicios:
# 1-Variables y Operadores
a) Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable.

b) Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.

c) Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado la suma una 3er variable (utilizar length).

# 2-Strings
a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).

b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).


# 3-Arrays
a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log)

b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

c) Agregar un elemento al principio y al final del array (utilizar unshift y push).

d) Quitar un elemento del principio y del final del array (utilizar shift y pop).

e) Invertir el orden del array (utilizar reverse)

f) Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

# 4-If Else
a) Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”

b) Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
*- “Bebe” si la edad es menor a 2 años
*- “Nino” si la edad es entre 2 y 12 años
*- “Adolecente” si la edad es entre 13 y 19 años
*- “Joven” si la edad está entre 20 y 30 años
*- “Adulto” entre 31 y 60 años
*- “Adulto mayor” entre 61 y 75 años
*- “Anciano” si es mayor a 75 años

# 5-For
a) Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.

b) Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.

c) Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.

d) Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for deberia haber 10 elementos dentro del array, desde el número 0 hasta al numero 9. Mostrar por la consola del navegador el al array final (utilizar console.log).
