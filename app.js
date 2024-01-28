
let numeroSecreto = 0;
let intentos =0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


console.log(numeroSecreto);

function asignarTextoElemento (elemento, texto){

    let elementoHTML = document.querySelector (elemento);
    elementoHTML.innerHTML = texto;
    return;

}
function verificarIntento (){
    let numeroDeUsuario = parseInt(document.getElementById ('valorUsuario').value);

   console.log(intentos);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento ('p' ,`Acertaste el número en ${intentos} ${(intentos ===1) ? ' vez ' : ' veces '}`);
        document.getElementById ('reiniciar').removeAttribute('disabled');
    }else{
        //el usuario no acertó


        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento ('p', 'El número secreto es menor');
        }else{
            asignarTextoElemento ('p','El número secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    
    return;
}

function limpiarCaja (){
   document.querySelector('#valorUsuario').value= '';
}



function generarNumeroSecreto() {
    let numeroGenerado = Math.floor( Math.random()*numeroMaximo)+1;
    console.log (numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon los números posibles');
    }else{
    //Si el numero generado esta incluido en la lista
    if(listaNumerosSorteados.includes(numeroGenerado) ){
        return generarNumeroSecreto ();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
     }
 }
}

function condicionesIniciales(){

    asignarTextoElemento ('h1','Juego del número secreto');
    asignarTextoElemento ('p',`Ingresa un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos =1;
}


function reiniciarJuego(){

    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero intentos
    condicionesIniciales();
    //desahabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales(); 



































    /*function calcularIMC(altura, peso) {
        let imc = peso / (altura * altura);
        console.log('Su IMC calculado es de ' + imc);
        return imc;
    }

    let mensajePeso = prompt('Ingrese su peso en kilogramos: ');
    let mensajeAltura = prompt('Ingrese su altura en metros: ');

    let peso = parseFloat(mensajePeso); // Convertir el peso a número con decimales
    let altura = parseFloat(mensajeAltura); // Convertir la altura a número con decimales

    if (isNaN(peso) || isNaN(altura)) {
        console.log('Por favor, ingrese valores numéricos válidos.');
    } else {
        let resultadoIMC = calcularIMC(altura, peso);
        console.log('Resultado: ' + resultadoIMC);
    }*/

    /*function calcularFactorial(numero) {
        if (numero === 0 || numero === 1) {
          return 1;
        } else {
          return numero * calcularFactorial(numero - 1);
        }
      }
      // Ejemplo de uso
      let numero = prompt('Ingrese un número: ');
      let resultado = calcularFactorial(numero);
      console.log(`El factorial de ${numero} es ${resultado}`);*/
      
//app.aluracursos.com/course/logica-programacion-explorar-funciones-listas/task/86068
      /*function convertirDolaresAReales(dolares) {
        var cotizacionDolar = 4.80;
        var reales = dolares * cotizacionDolar;
        return reales;
      }
      // Ejemplo de uso
      let valorEnDolar = prompt('Ingrese el monto: ');
      let valorEnReales = convertirDolaresAReales(valorEnDolar);
      console.log(`${valorEnDolar} dólares  es R$ ${valorEnReales}`);*/
      





      /*function calcularAreaRectangular (altura,anchura){

        let area = altura *anchura;
        let perimetro = 2* (altura + anchura);

        console.log('Area: ' +area);
        console.log('Perimetro ' + perimetro);
      }      
      let altura =prompt('Ingrese la altura: ');
      let anchura= prompt ('Ingrese la anchura: ');

      calcularAreaRectangular (altura,anchura);*/


      /*
      function mostrarTablaDeMultiplicar(numero) {
        for (let i = 1; i <= 10; i++) {
          let resultado = numero * i;
          console.log(numero + " x " + i + " = " + resultado);
        }
      }
      // Ejemplo de uso
      let numero = prompt('Ingrese un numero : ');
      mostrarTablaDeMultiplicar(numero);
      */






























/*
function generarSaludo (){
    console.log  ('HOLA MUNDO');
}
generarSaludo ();

function generarSaludo() {
    alert('¡Hola, mundo!');
}*/


/*function generarSaludo(nombre){

    console.log('hola, ' +nombre);
}
    let nombreUsuario = prompt ('Ingrese un Nombre: ');
    generarSaludo(nombreUsuario);*/

/*
function calcularD (numero){

    let doble = numero*2;
    console.log('El numero que ingreso es ' + numero+ ' el doble será de ' +doble);
    return doble;
}
    let iNumero = prompt('Ingrese un nùmero ');
    iNumero =parseInt(iNumero);
    let resultado = calcularD(iNumero);*/

/*
    function calcularPromedio(v1, v2, v3){
        
        let resultado = (v1+v2+v3)/3;
        console.log ('Los numero que ingresaste son ' +v1+ ' , ' +v2+ ' , ' +v3+ 'y el promedio es de ' +resultado);
        return resultado;
    }

    let v1= prompt ('Ingrese el primer numero: ');
    v1 =parseInt(v1);
    let v2= prompt ('Ingrese el segundo numero: ');
    v2 =parseInt(v2);
    let v3= prompt ('Ingrese el tercer numero: ');
    v3 =parseInt(v3);

    
let promedio = calcularPromedio(v1, v2, v3);*/

/*function numeroMayor (v1,v2){

    if(v1>v2){
        console.log('El primer numero ' + v1 + ' es el mayor');

    } else if (v2 > v1) {
        console.log('El segundo numero ' + v2 + ' es el mayor');
    } else {
        console.log('Ambos números son iguales');
    }
}
   let v1= prompt ('Ingrese el primer numero: ');
    v1 =parseInt(v1);
    let v2= prompt ('Ingrese el segundo numero: ');
    v2 =parseInt(v2);

    let resultado = numeroMayor (v1,v2);*/


 /*function numeroMultiplicar(numero){

  let resultado = numero * numero;

  console.log ('El numero ingresado es ' + numero + ' y el doble es ' + resultado);
  return resultado;

 }

 let datos =prompt ('Ingrese un numero: ');
datos=parseInt (datos);

let mult = numeroMultiplicar(datos);*/




