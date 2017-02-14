/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo, ancho;

	largo = parseFloat(document.getElementById("Largo").value);
	ancho = parseFloat(document.getElementById("Ancho").value);

	alert ("Se necesitan " + (largo + ancho)*3 + " metros de alambre");

}
function Circulo () 
{
	var radio;

	radio = parseFloat(document.getElementById("Radio").value);
	
	alert ("Se necesitan " + (((radio)*2)*3.14)*3 + " metros de alambre");

}
function Materiales () 
{
	var largo, ancho, x, cal, cemento;

	largo = parseFloat(document.getElementById("Largo").value);
	ancho = parseFloat(document.getElementById("Ancho").value);

	x = (largo + ancho)*3;

	cal = x * 3;
	cemento = x * 2;

	alert ("Se necesitan " + cal + " bolsas de cal y " + cemento + " bolsas de cemento");
	
}