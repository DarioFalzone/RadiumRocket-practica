// TAG NAME FORM EXIST
const form = document.getElementsByTagName('form');

// GET ELEMENTS BY ID
let email = document.getElementById('login-email');
let password = document.getElementById('login-pass');

// MESSAGE ALERT
let success = document.getElementById('message-text');
let wrong = document.getElementById('message-text');

// GET ELEMENTS BY TAG NAME
let label = document.getElementsByTagName('label');
let input = document.getElementsByTagName('input');

// BUTTON SEND
let sendButton = document.getElementById('button-send');

// TAGS VALIDATION
if (form.length === 0) {
	wrong.innerHTML = '<p>Please create a form</p>';
	wrong.style.display = 'contents';
}

if (label.length === 0) {
	wrong.innerHTML = '<p>Please create a label</p>';
	wrong.style.display = 'contents';
} else if (label.length < 2 || label.length > 2) {
	wrong.innerHTML =
		'<p>The form must have two labels as a minimum / maximum</p>';
	wrong.style.display = 'contents';
}

if (input.length === 0) {
	wrong.innerHTML = '<p>Please create a input</p>';
	wrong.style.display = 'contents';
} else if (input.length < 3 || input.length > 3) {
	wrong.innerHTML =
		'<p>The form must have three input as a minimum / maximum</p>';
	wrong.style.display = 'contents';
}

//VALIDATION STATE
let parametricEmail = "";
let parametricPass = "";
let wrongTextEmail = "";
let wrongTextPass = "";

// EMAIL INPUT VALIDATION
function validationEmail(){
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
	}
	else {
		parametricEmail = 0;
	}
}

function clearInputEmail(){
	if(wrongTextEmail == 'wrong'){
		wrong.style.display = 'none';
		email.style.backgroundColor = '#FFF'
	}
}

// PASSWORD INPUT VALIDATION
function validationPass(){
	if (password.value === '' || password.value === null) {
		wrong.innerHTML = '<p>Please enter a password</p>';
		wrong.style.display = 'contents';
		wrong.style.color = '#e74c3c';
		parametricPass = 1;
		wrongTextPass = "wrong";
		return;
	} else if (password.length < 8) {
		wrong.innerHTML =
			'<p>Please enter a password greater than 8 characters</p>';
		wrong.style.display = 'contents';
		wrong.style.color = '#e74c3c';
		parametricPass = 1;
		wrongTextPass = "wrong";
		return;
	} else if (password.value.search(/[0-9]/) == -1) {
		wrong.innerHTML = '<p>Please enter a password with one number minimum</p>';
		wrong.style.display = 'contents';
		wrong.style.color = '#e74c3c';
		parametricPass = 1;
		wrongTextPass = "wrong";
		return;
	}
	else {
		parametricPass = 0;
	}
}

function clearInputPass(){
	if(wrongTextPass == 'wrong'){
		wrong.style.display = 'none';
		password.style.backgroundColor = '#FFF'
	}
}

// SUCCESS VALIDATION
function validationFunction() {
	if (parametricEmail == 0 && parametricPass == 0) {
		let correctPass = password.value;
		let correctEmail = email.value;

		success.innerHTML = ` <p>Every validation has passed</p>
													<p>Your email is: <br> ${correctEmail}</p>
													<p>Your password is: <br> ${correctPass}</p> `;
		success.style.display = 'contents';
		success.style.color = '#27ae60';
	}
}

// EVENTS STATE
email.addEventListener('blur', validationEmail);
email.addEventListener('focus', clearInputEmail);

password.addEventListener('blur', validationPass);
password.addEventListener('focus', clearInputPass);

sendButton.addEventListener('click', validationFunction);

// // HTTP REQUEST
function apiRequest()
{
    let url = "https://jsonplaceholder.typicode.com/users?email=" + email.value + password.value;
    fetch(url)
    .then(response => console.log(response));
}