/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar()
{

 var marca;
 var cantidad;
 var precio;
 var pesoKilogramo;
 var tipo;
 var respuesta = "si";
 var Primeramarca = true;
 var MarcaMascaraLiquido;
 var tipoLiquidoMasCaro;
 var precioMasCaro;
 var tipoSolidoMasLiviano;
 var MarcaMasLiviano;
 var PrimeraMarcaLiviana = true;
 var acumuladorPesototal = 0;
 var contadorpeso =0;

    respuesta == "si";
    while(respuesta =="si"){

      marca = prompt("ingrese marca del poducto");
      cantidad = parseInt(prompt("ingrese cantidad de producto"));

      precio = parseFloat(prompt("ingrese precio"));
        while(isNaN(precio)&& precio >1)
        {
      precio = parseInt(prompt(" Error ingrese un importe"));    
        }
      pesoKilogramo = parseFloat(prompt("ingrese el peso en kilogramos "));
        while(isNaN(pesoKilogramo)&& pesoKilogramo >1)
        {
      pesoKilogramo = parseFloat(prompt(" Error ingrese el peso en kilogramos "));
        }
      tipo = prompt("ingrese el tipo de producto sea 'liquido' o 'solido':");
        while(tipo !="solido" && tipo!="liquido"){
      tipo = prompt(" ERROR ingrese el tipo de producto sea 'liquido' o 'solido':");
        } 
        // b -la marca del más caro de los líquidos
        if(Primeramarca == true){
          MarcaMascaraLiquido = marca;
          tipoLiquidoMasCaro = tipo;
          precioMasCaro = precio;
          Primeramarca = false;
        }
        else
        {
          if(MarcaMascaraLiquido > tipoLiquidoMasCaro)
          {
          MarcaMascaraLiquido = marca;
          tipoLiquidoMasCaro = tipo;
          }
          // la marca del mas liviano
        }
        if(PrimeraMarcaLiviana == true && tipoSolidoMasLiviano > MarcaMasLiviano){
          tipoSolidoMasLiviano = tipo;
          MarcaMasLiviano = marca;
          PrimeraMarcaLiviana = false;
        }
// informar el peso total de la compra.
acumuladorPesototal+=cantidad;
contadorpeso++;




      respuesta = prompt(" quiere seguir");
    }
    

    document.write("elpeso total de la compra es de: " + acumuladorPesototal + " <br>");
    document.write(" la marca mas cara es" + MarcaMascaraLiquido + " <br>" );
    document.write(" la marca del mas liviano es:" + MarcaMasLiviano + "<br>");

}
