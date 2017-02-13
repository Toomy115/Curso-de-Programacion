function Mostrar()
{
//tomo la edad  
if (document.getElementById("edad").value >= 18) {
	alert ("La persona es Mayor de Edad");
}

if (document.getElementById("edad").value >=13 && document.getElementById("edad").value <=17) {
	alert ("La persona es Adolecente");
}

if (document.getElementById("edad").value <13) {
	alert ("La persona es un Niño");
}



}//FIN DE LA FUNCIÓN