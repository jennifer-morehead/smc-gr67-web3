/* JAVASCRIPT */

/*	     __                           
        / /___ ___ __________________/
   __  / / __ `__ \ ___Jennifer_____/
  / /_/ / / / / / /____Morehead____/
  \____/_/ /_/ /_/________________/ 
*/

$(document).ready(function() {
	$('#myCarousel').carousel ({
		interval: 2000
	});

	$('#myModal').modal ({
		// this makes it so user cannot click in gray area to close modal
		backdrop: false,
		keyboard: false
	})

})