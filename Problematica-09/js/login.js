// TAG NAME FORM EXIST
const form = document.getElementsByTagName('form');

// GET ELEMENTS BY ID
var email = document.getElementById('login-email');
var password = document.getElementById('login-pass');

// MESSAGE ALERT
var success = document.getElementById('message-text');
var wrong = document.getElementById('message-text');

// GET ELEMENTS BY TAG NAME
var label = document.getElementsByTagName('label');
var input = document.getElementsByTagName('input');
const button = document.getElementsByTagName('button');

// TAGS VALIDATION
if (button.length === 0) {
	wrong.innerHTML = '<p>Please create a button</p>';
	wrong.style.display = 'contents';
}

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
} else if (label.length < 2 || label.length > 2) {
	wrong.innerHTML =
		'<p>The form must have two input as a minimum / maximum</p>';
	wrong.style.display = 'contents';
}

function validationFunction() {
	// EMAIL INPUT VALIDATION
	if (email.value === '' || email.value === null) {
		wrong.innerHTML = '<p>Please enter your email</p>';
		wrong.style.display = 'contents';
		wrong.style.color = '#e74c3c';
		return;
	}

	if (
		email.value.search(
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		) == -1
	) {
		wrong.innerHTML = '<p>The email entered is not valid</p>';
		wrong.style.display = 'contents';
		wrong.style.color = '#e74c3c';
		return;
	}

	// PASSWORD INPUT VALIDATION
	if (password.value === '' || password.value === null) {
		wrong.innerHTML = '<p>Please enter a password</p>';
		wrong.style.display = 'contents';
		wrong.style.color = '#e74c3c';
		return;
	}

	// SUCCESS VALIDATION
	else {
		success.innerHTML = '<p>Every validation has passed</p>';
		success.style.display = 'contents';
		success.style.color = '#27ae60';
	}
}
