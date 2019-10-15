/* JAVASCRIPT */

/*	     __                           
        / /___ ___ __________________/
   __  / / __ `__ \ ___Jennifer_____/
  / /_/ / / / / / /____Morehead____/
  \____/_/ /_/ /_/________________/ 
*/


function toggleBilling() {
	if (document.getElementById('customSwitches').checked == true) {
		document.getElementById('billingGroup').style.display = "none";
		document.getElementById('shippingGroup').classList.remove("col-md-5");
	} 
	else {
		document.getElementById('billingGroup').style.display = "block";
		document.getElementById('shippingGroup').classList.add("col-md-5");
	}
}


var errorInput = document.getElementsByClassName('invalid-input');
function alphaOnly() {
	var fname = document.getElementById('shippingFirstName');
	var lname = document.getElementById('shippingLastName');
	var city = document.getElementById('shippingCity');
	
	var numbers = "^[0-9*#+@]+$";
	if (fname.value.match(numbers) && document.activeElement == fname) {
		errorInput[0].style.display = "block";
	} else if (lname.value.match(numbers) && document.activeElement == lname) {
		errorInput[1].style.display = "block";
	} else if (city.value.match(numbers) && document.activeElement == city) {
		errorInput[3].style.display = "block";
	} else {
		errorInput[0].style.display = "none";
		errorInput[1].style.display = "none";
		errorInput[3].style.display = "none";
	}
}

function emailOnly() {
	var email = document.getElementById('shippingEmail');
	var emails = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$";
	if (email.value.match(emails)) {
		errorInput[2].style.display ="none";
	} else {
		errorInput[2].style.display ="block";
	}
}
function statesOnly() {
	var state = document.getElementById('shippingState');	
	var states = "^((A[LKZR])|(C[AOT])|(D[EC])|(FL)|(GA)|(HI)|(I[DLNA])|(K[SY])|(LA)|(M[EDAINSOT])|(N[EVHJMYCD])|(O[HKR])|(PA)|(RI)|(S[CD])|(T[NX])|(UT)|(V[TA])|(W[AVIY]))$";
	if (state.value.match(states)) {
		errorInput[4].style.display = "none";
	} else {
		errorInput[4].style.display = "block";
	}
}


function numbersOnly() {
	var zip = document.getElementById('shippingZip');
	var zips = "^[A-Za-z]+$" ;
	if (zip.value.match(zips)) {
		errorInput[5].style.display = "block";
	} else {
		errorInput[5].style.display = "none";
	}
}




(function () {
	'use strict';
	window.addEventListener('load', function () {
	// Fetch all the forms we want to apply custom Bootstrap validation styles to
		var forms = document.getElementsByClassName('needs-validation');
		// Loop over them and prevent submission
		var validation = Array.prototype.filter.call(forms, function (form) {
			form.addEventListener('submit', function (event) {
			if (form.checkValidity() === false) {
				event.preventDefault();
				event.stopPropagation();
				}
				form.classList.add('was-validated');
			}, false);
		});
	}, false);
})();


