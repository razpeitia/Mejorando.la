$(document).ready(
	function ()
	{
		
		var opciones = {
			beforeSubmit: enviando,
			success: recepcion,
			clearForm: true
		};
		$('#formulario').ajaxForm(opciones); 
	}
	
);
function enviando()
{
	$("#inscripcion h3").text("Inscribiendote...").fadeOut().fadeIn();
}

function recepcion(datos)
{
	datos = $.trim(datos);
	if(datos=="OK")
	{
		$("#inscripcion h3").text("¡Ya estás inscrito! :D").fadeOut().fadeIn();
		$("#inscripcion #confirmacion").slideDown();
		var translacion = "translate(400px, 250px)"; 
		var transform = "transform: " + translacion + "; " + 
						"-webkit-transform: " + translacion + "; " + 
						"-moz-transform: " + translacion + "; " + 
						"-ms-transform: " + translacion + "; " + 
						"-o-transform: " + translacion + ";"; 
		/*$("#social").attr("style", "margin: 150px 0 0 200px !important; " + transform);*/
		$('.btn_twitter,.btn_facebook,.btn_googlemas').css('opacity',1);
		
	}
	else
	{
		$("#inscripcion h3").text("Algo falló :(").fadeOut().fadeIn();
		$("#inscripcion #confirmacion").text("Verifica que todos los datos estén bien escritos").slideDown();
		$("#formulario #nombre").focus();
	}
	
	
	
}