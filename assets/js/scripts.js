$(function(){

	/*fixer le menu de gauche*/ 
	$("#salers-menu-items > .card").sticky({topSpacing:"4.5rem"});

	/*$("#salers-others-informations").sticky({topSpacing:"4.5rem"});*/


	$('#dropdown-btn').onclick(function() {
        $(this).dropdown()
      })


	$('#salers-dropdown-infos-shop').hover(function() {
        $(this).dropdown()
      })


} )