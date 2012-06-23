jQuery(function ($) {
	function enviando()
	{
		$("#formulario #inscripcion").text("Inscribiendote...").fadeOut().fadeIn();
	}

	function recepcion(datos)
	{
		datos = $.trim(datos);
		if(datos=="OK")
		{
			$("#formulario #inscripcion").text("¡Ya estás inscrito!").fadeOut().fadeIn();
		}
		else
		{
			$("#formulario #inscripcion").text("Seguro ya estabas inscrito").fadeOut().fadeIn();
			$("#formulario  #confirmacion").text("Verifica que todos los datos estén bien escritos").slideDown();
			$("#formulario  #email").focus();
		}
	}

	var opciones = {
		beforeSubmit: enviando,
		success: recepcion,
		clearForm: true
	};
	
	$('#formulario').ajaxForm(opciones); 
});