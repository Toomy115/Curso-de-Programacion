/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

function Sumar () 
{
	var num1, num2, num3;
	num1 = parseInt(document.getElementById("PrecioUno").value);
	num2 = parseInt(document.getElementById("PrecioDos").value);
	num3 = parseInt(document.getElementById("PrecioTres").value);

	alert ("La suma de los numeros da " + (num1 + num2 + num3));

}
function Promedio () 
{
	var num1, num2, num3;
	num1 = parseInt(document.getElementById("PrecioUno").value);
	num2 = parseInt(document.getElementById("PrecioDos").value);
	num3 = parseInt(document.getElementById("PrecioTres").value);

	alert ("El promedio de los numeros da " + (num1 + num2 + num3)/3);
	
}
function PrecioFinal () 
{

	var num1, num2, num3, iva, sum;
	num1 = parseInt(document.getElementById("PrecioUno").value);
	num2 = parseInt(document.getElementById("PrecioDos").value);
	num3 = parseInt(document.getElementById("PrecioTres").value);

	sum = (num1 + num2 + num3);
	iva = ((sum/1.21)*0.21);


	alert ("El precio con IVA es " + parseInt((iva + sum )));

}