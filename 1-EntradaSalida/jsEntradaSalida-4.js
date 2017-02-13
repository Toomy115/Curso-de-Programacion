/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
var x;
function Mostar()
{

	x = prompt("Ingrese nombre");

	document.getElementById("elNombre").value=x
}

