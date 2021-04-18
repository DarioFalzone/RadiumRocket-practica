# WEEK 10
# Descripción del problema a resolver
La problemática de la semana 10 consiste en tomar los formularios realizados en la problemática de la semana 09 y trabajar sobre ellos. Deberán introducir validaciones que se ejecutarán ante eventos. Cada campo tendrá una serie de condiciones que serán validadas. Por último, una vez que los campos del formulario sean válidos se deberá realizar el envío de datos ingresados a través de HTTP a una página ficticia.

# Validaciones:
1) Login form:
	a) Email: debe tener un formato de email válido.
	b) Password: Al menos 8 caracteres, formados por letras y números.
2) Register form:
	a) Full name: Debe tener más de 6 letras y al menos un espacio entre medio.
	b) Email: debe tener un formato de email válido.
	c) Password: Al menos 8 caracteres, formados por letras y números.
	d) Confirm password: debe ser igual al contenido del input Password.

La validación de cada campo se debe realizar en el evento “blur” de cada uno de los campos.

Además, si algún campo tiene un error de validación, en el evento “focus” de dicho campo debe desaparecer el mensaje porque se asume que el usuario está corrigiendo el error.

Al presionar el botón “Registrarse” o “Iniciar sesión”, se debe mostrar debajo del formulario dentro del div utilizado para mostrar los errores en la clase pasada, los valores ingresados en el formulario.

# PASOS:
	1) Continuando con los formularios de la semana 09, crear nuevos archivos javascript para las validaciones de los mismos.
	2) Agregar el código JavaScript necesario para capturar el evento “blur” de cada campo, validar el contenido y mostrar el mensaje de error correspondiente.
	3) Agregar el código JavaScript necesario para capturar el evento “focus” de cada campo y ocultar el mensaje de error si es que había uno.
	4) Agregar el código JavaScript necesario para mostrar los valores debajo del formularios y  realizar una HTTP Request  a través del método GET a la siguiente URL: https://jsonplaceholder.typicode.com/users?email=randomEmail@gmail.com, para enviar el valor del email del usuario a los Queryparam de la URL,  al presionar el botón “Registrarse” o “Iniciar sesión”.

