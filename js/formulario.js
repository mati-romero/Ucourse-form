$( document ).ready(function() {

	// Animaciones

	$(".formulario-texto").slideDown(3000);

	$(".formulario").slideDown(1000);

	// Botones

    $(".btn-siguiente").on('click',function() {
    	var ruta = $(this).attr("href");
    	$(ruta).fadeIn(2000);

    	var padre = $(this).attr("padre");
    	$(padre).css("display", "none");
    });

    $(".btn-volver").on('click',function() {
    	var ruta = $(this).attr("href");
    	$(ruta).fadeIn(2000);

    	var hijo = $(this).attr("hijo");
    	$(hijo).css("display", "none");
    });
});