/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temp, temp2, tempr;
	tempr = parseFloat(document.getElementById("Temperatura").value);
	temp = tempr - 32;
	temp = temp*0.5;
	temp2 = temp*0.1;

	alert (tempr + "º Fahrenheit son " + (temp+temp2) + "º Centígrados");
}

function CentigradosFahrenheit () 
{
	var temp, temp2, tempr;
	tempr = parseFloat(document.getElementById("Temperatura").value);
	temp = tempr*2;
	temp2 = temp*0.1;

	alert (tempr + "º Centígrados son " + ((temp-temp2)+32) + "º Fahrenheit");
}
