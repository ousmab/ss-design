$(function(){

	/*fixer le menu de gauche*/
	$("#salers-menu-items > .card").sticky({topSpacing:"4.5rem"});


	$('#dropdown-btn').onclick(function() {
        $(this).dropdown()
      })

} )