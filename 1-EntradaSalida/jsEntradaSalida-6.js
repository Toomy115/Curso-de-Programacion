/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var num1, num2, result;

	num1 = parseInt(document.getElementById("numeroUno").value);
	num2 = parseInt(document.getElementById("numeroDos").value);

	/*parseInt(num1);
	parseInt(num2);*/

	//result = (num1 + num2);

	alert ("La suma de los numeros es " + (num1 + num2));

}

