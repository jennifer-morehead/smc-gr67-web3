/* JAVASCRIPT */

/*	     __                           
        / /___ ___ __________________/
   __  / / __ `__ \ ___Jennifer_____/
  / /_/ / / / / / /____Morehead____/
  \____/_/ /_/ /_/________________/ 
*/

$(document).ready(function() {
	$('#play').click(function() {
		if($(this).data('anim') === 'running'){
			$('[class^="box"]').css('animation-play-state', 'paused');
			$(this).data('anim','paused');
		}
		else {
			$('[class^="box"]').css('animation-play-state', 'running');
			$(this).data('anim','running');
		}

	});
})

// $(document).ready(function() {

// 		$('[class^=box]').toggleClass('animation-run');
// 		console.log('clicked');
// 	});
// })