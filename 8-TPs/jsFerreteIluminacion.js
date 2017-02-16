/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidad, desc, bruto, seleccion, neto, desc2, neto2;

 	cantidad = parseInt(document.getElementById("Cantidad").value);
 	seleccion = document.getElementById("Marca").value;

 	if (cantidad>=6 ) {
 		bruto = cantidad*35;
 		desc = 50 * bruto / 100;
 		document.getElementById("precioDescuento").value = desc;
 	}





    if (cantidad==5 && seleccion=="ArgentinaLuz") {
    	bruto = cantidad*35;
    	desc = 40 * bruto / 100;
    	neto = bruto - desc;
    	document.getElementById("precioDescuento").value = neto;
    }
    	else if (cantidad==5 && seleccion != "ArgentinaLuz") {
    		bruto = cantidad*35;
    		desc = 30 * bruto / 100;
    		neto = bruto - desc;
    		document.getElementById("precioDescuento").value = neto;
    	}






    if (cantidad==4 && seleccion=="ArgentinaLuz" || seleccion=="FelipeLamparas") {
    		bruto = cantidad*35;
    		desc = 25 * bruto / 100;
    		neto = bruto - desc;
    		document.getElementById("precioDescuento").value = neto;
    }

    else if (cantidad==4 && seleccion != "ArgentinaLuz"||"FelipeLamparas") {
    		bruto = cantidad*35;
    		desc = 20 * bruto / 100;
    		neto = bruto - desc;
    		document.getElementById("precioDescuento").value = neto;
    }





    if (cantidad==3 && seleccion=="ArgentinaLuz") {
    		bruto = cantidad*35;
    		desc = 15 * bruto / 100;
    		neto = bruto - desc;
    		document.getElementById("precioDescuento").value = neto;
    }

    else if (cantidad==3 && seleccion=="FelipeLamparas") {
    		bruto = cantidad*35;
    		desc = 10 * bruto / 100;
    		neto = bruto - desc;
    		document.getElementById("precioDescuento").value = neto;
    }
    else if (cantidad==3 && seleccion != "ArgentinaLuz"||"FelipeLamparas") {
    		bruto = cantidad*35;
    		desc = 5 * bruto / 100;
    		neto = bruto - desc;
    		document.getElementById("precioDescuento").value = neto;
    	}
  if (neto>120) {
  	desc2 = 10 * neto / 100;
  	desc2 = desc2 - neto;
  	neto2 = neto + desc2; 
  	alert ("Usted pago " + neto2 + " de IIBB.");

  }
}

