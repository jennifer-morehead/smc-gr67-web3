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

// Example starter JavaScript for disabling form submissions if there are invalid fields
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
