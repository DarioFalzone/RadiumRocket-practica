// TAG NAME FORM EXIST
const form = document.getElementsByTagName('form');

// GET ELEMENTS BY ID
let email = document.getElementById('register-email');
let nameUser = document.getElementById('register-name');
let password = document.getElementById('register-password');
let rePassword = document.getElementById('re-password');
let resetButton = document.getElementById('reset-button');

// MESSAGE ALERT
let success = document.getElementById('message-text');
let wrong = document.getElementById('message-text');

// GET ELEMENTS BY TAG NAME
let label = document.getElementsByTagName('label');
let input = document.getElementsByTagName('input');
const button = document.getElementsByTagName('button');

// BUTTON SEND
let sendButton = document.getElementById('button-send');

// TAGS VALIDATION
if (button.length === 0) {
	wrong.innerHTML = '<p>Please create a button</p>';
	wrong.style.display = 'contents';
} else if (button.length < 1) {
	wrong.innerHTML =
		'<p>The form must have two button as a minimum / maximum</p>';
	wrong.style.display = 'contents';
}

if (form.length === 0) {
	wrong.innerHTML = '<p>Please create a form</p>';
	wrong.style.display = 'contents';
}

if (label.length === 0) {
	wrong.innerHTML = '<p>Please create a label</p>';
	wrong.style.display = 'contents';
} else if (label.length < 4 || label.length > 4) {
	wrong.innerHTML =
		'<p>The form must have four labels as a minimum / maximum</p>';
	wrong.style.display = 'contents';
}

if (input.length === 0) {
	wrong.innerHTML = '<p>Please create a input</p>';
	wrong.style.display = 'contents';
} else if (label.length < 4 || label.length > 4) {
	wrong.innerHTML =
		'<p>The form must have four input as a minimum / maximum</p>';
	wrong.style.display = 'contents';
}

//VALIDATION STATE
let parametricNameUser = '';
let parametricEmail = '';
let parametricPass = '';
let parametricRePass = '';
let wrongTextNameUser = '';
let wrongTextEmail = '';
let wrongTextPass = '';
let wrongTextRePass = '';

// NAME INPUT VALIDATION
function validationNameUser() {
	// let userNameWhiteSpace = /^[a-zA-Z]+[ ]+[a-zA-Z\s]+$/;

	if (nameUser.value === '' || nameUser.value === null) {
		wrong.innerHTML = '<p>Please enter your Name</p>';
		wrong.style.display = 'contents';
		wrong.style.color = '#e74c3c';
		parametricNameUser = 1;
		wrongTextNameUser = 'wrong';
		return;
	} else if (nameUser.length < 6) {
		wrong.innerHTML = '<p>Please enter your Name with minimum 6 character</p>';
		wrong.style.display = 'contents';
		wrong.style.color = '#e74c3c';
		parametricNameUser = 1;
		wrongTextNameUser = 'wrong';
		return;
	} else {
		parametricNameUser = 0;
	}
	// else if (nameUser.value.match(userNameWhiteSpace)!=true) {
	// 	wrong.innerHTML = '<p>Please enter your Name with one With Space</p>';
	// 	wrong.style.display = 'contents';
	// 	wrong.style.color = '#e74c3c';
	// 	parametricNameUser = 1;
	// 	wrongTextNameUser = 'wrong';
	// 	return;
	// }
}

function clearInputNameUser() {
	if (wrongTextNameUser == 'wrong') {
		wrong.style.display = 'none';
		nameUser.style.backgroundColor = '#FFF';
	}
}

// EMAIL INPUT VALIDATION
function validationEmail() {
	if (email.value === '' || email.value === null) {
		wrong.innerHTML = '<p>Please enter your email</p>';
		wrong.style.display = 'contents';
		wrong.style.color = '#e74c3c';
		parametricEmail = 1;
		wrongTextEmail = 'wrong';
		return;
	} else if (
		email.value.search(
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		) == -1
	) {
		wrong.innerHTML = '<p>The email entered is not valid</p>';
		wrong.style.display = 'contents';
		wrong.style.color = '#e74c3c';
		parametricEmail = 1;
		wrongTextEmail = 'wrong';
		return;
	} else {
		parametricEmail = 0;
	}
}

function clearInputEmail() {
	if (wrongTextEmail == 'wrong') {
		wrong.style.display = 'none';
		email.style.backgroundColor = '#FFF';
	}
}

// PASSWORD INPUT VALIDATION
function validationPass() {
	if (password.value === '' || password.value === null) {
		wrong.innerHTML = '<p>Please enter a password</p>';
		wrong.style.display = 'contents';
		wrong.style.color = '#e74c3c';
		parametricPass = 1;
		return;
	} else if (password.length < 8) {
		wrong.innerHTML =
			'<p>Please enter a password greater than 8 characters</p>';
		wrong.style.display = 'contents';
		wrong.style.color = '#e74c3c';
		parametricPass = 1;
		wrongTextPass = 'wrong';
		return;
	} else if (password.value.search(/[0-9]/) == -1) {
		wrong.innerHTML = '<p>Please enter a password with one number minimum</p>';
		wrong.style.display = 'contents';
		wrong.style.color = '#e74c3c';
		parametricPass = 1;
		wrongTextPass = 'wrong';
		return;
	} else {
		parametricPass = 0;
	}
}

function clearInputPass() {
	if (wrongTextPass == 'wrong') {
		wrong.style.display = 'none';
		password.style.backgroundColor = '#FFF';
	}
}

// RE-PASSWORD INPUT VALIDATION
function validationRePass() {
	if (rePassword.value === '' || rePassword.value === null) {
		wrong.innerHTML = '<p>Please enter a password</p>';
		wrong.style.display = 'contents';
		wrong.style.color = '#e74c3c';
		parametricPass = 1;
		return;
	}
	else if (password.value != rePassword.value) {
		wrong.innerHTML = '<p>The passwords are not the same</p>';
		wrong.style.display = 'contents';
		wrong.style.color = '#e74c3c';
		parametricPass = 1;
		wrongTextRePass = 'wrong';
		return;
	}
	else {
		 parametricRePass = 0;
	}
}

function clearInputRePass() {
	if (wrongTextRePass == 'wrong') {
		wrong.style.display = 'none';
		rePassword.style.backgroundColor = '#FFF';
	}
}

// SUCCESS VALIDATION
function validationFunction() {
	if (parametricNameUser == 0 && parametricEmail == 0 && parametricPass == 0 && parametricRePass == 0) {
		let correctName = nameUser.value;
		let correctPass = password.value;
		let correctEmail = email.value;

		success.innerHTML = ` <p>Every validation has passed</p>
													<p>Your Username is: <br> ${correctName}</p>
													<p>Your email is: <br> ${correctEmail}</p>
													<p>Your password is: <br> ${correctPass}</p> `;
		success.style.display = 'contents';
		success.style.color = '#27ae60';
	}
}

// EVENTS STATE
nameUser.addEventListener('blur', validationNameUser);
nameUser.addEventListener('focus', clearInputNameUser);

email.addEventListener('blur', validationEmail);
email.addEventListener('focus', clearInputEmail);

password.addEventListener('blur', validationPass);
password.addEventListener('focus', clearInputPass);

rePassword.addEventListener('blur', validationRePass);
rePassword.addEventListener('focus', clearInputRePass);

sendButton.addEventListener('click', validationFunction);

// HTTP REQUEST
function apiRequest()
{
    const url = `https://jsonplaceholder.typicode.com/users?email=${email.value}`;
    fetch(url)
			.then(response => response.json()) //Formateo a json la respuesta
			.then(json => console.log(json)) //Muestro en consola
}