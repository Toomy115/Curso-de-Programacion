/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var num1, num2;

	num1 = parseFloat(document.getElementById("numeroDividendo").value);
	num2 = parseFloat(document.getElementById("numeroDivisor").value);

	alert ("El resto es " + (num1 % num2));
}
