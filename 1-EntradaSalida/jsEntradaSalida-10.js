/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var imp, result;

	imp = parseInt(document.getElementById("importe").value);

	result = (imp / 100) * 25;

	imp = (imp - result);

	document.getElementById("resultado").value = imp;
}
