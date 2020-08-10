/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	var nombre;
	var temperatura;
	var sexo;
	var edad;
	var acumuladorEdad =0;
	var contadorEdad =0;
	var contadorSexoFemenino= 0;
	var contadorSexoMasculino =0;
	var acumuladorFemenino =0;
	var acumuladorMasculino =0;
	var PromedioTotalEdad;
	var SexoFemeninoMasTemperatura;
	var MasTemperatura;
	var primeraTempratura = true;
	var mensajeTemperatura = " nose ingresaron mujeres";

	 for(var i = 0; i<2; i++){

		nombe = prompt(" ingrese nombre");
			while(nombre)
			{
		nombre = prompt(" error ingrese las opcion  pedida");
			}
		temperatura = parseFloat(prompt(" ingrese temperatura"));
			while(isNaN(temperatura)&& temperatura <1){
		temperatura = parseFloat(prompt("Error ingrese bien la temperatura"));		
			}	
		sexo = prompt(" ingrese sexo 'f' o 'm'");
			while(sexo!="f" && sexo!="m"){
		sexo = prompt(" Error ingrese sexo 'f' o 'm'");	
			}
		edad = parseInt(prompt("ingrese edad "));
			while(isNaN(edad)&& edad <1){
		edad = prompt(" Error ingrese correctamente lo seleccionado");		
			}
			acumuladorEdad+=edad;
			contadorEdad++;


			if(primeraTempratura ==true){
				SexoFemeninoMasTemperatura = sexo;
				MasTemperatura = temperatura;
				primeraTempratura = false;

			}else
			{if(SexoFemeninoMasTemperatura > MasTemperatura)
				{
					SexoFemeninoMasTemperatura = sexo;
				MasTemperatura = temperatura;
			}

			}

			switch(sexo){
				case "m":
					acumuladorMasculino+=sexo;
					contadorSexoMasculino++;

					break;
				case "f":
					acumuladorFemenino+=sexo;
					contadorSexoFemenino++;
					break;	
			}
			if(primeraTempratura == 1){
			 mensajeTemperatura = " no  se ingresaron mujeres ";
			 }
			
	 }
	


PromedioTotalEdad = acumuladorEdad / contadorEdad;

	document.write("cantidad de personas de  cada sexo  femenino es: " + contadorSexoFemenino + " y el masculino es :" + contadorSexoMasculino +">br>");
	document.write(" la edad promedio tatol es : " + PromedioTotalEdad + "<br>");
	document.write("el sexo femenino con mas temperatura es :" + MasTemperatura + "<br>");
	document.write(mensajeTemperatura);
	

}
