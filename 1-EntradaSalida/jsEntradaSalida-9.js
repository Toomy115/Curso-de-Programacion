/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	var sueldo, result, por;

	sueldo = parseInt(document.getElementById("sueldo").value);

	por = (sueldo / 100) * 10 ;

	sueldo = (sueldo + por);

	document.getElementById("resultado").value = sueldo;
	
}