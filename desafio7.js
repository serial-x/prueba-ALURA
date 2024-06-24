//Desafíos:
//Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function indiceDeMasaCorporal(peso, altura) {
    let IMC = peso/(altura * altura); // Altura en metros / Peso en Kilogramos
    console.log (altura*altura)
    return IMC; // valor: 330
}
console.log (indiceDeMasaCorporal(95, 1.78));

//Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  
  alert( factorial(5) ); // 120

//Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function conversorDeMoneda(monto) {
    let totalDolar = (monto / cotizacionDolar);
    return totalDolar;
}
let cotizacionDolar = 1300
console.log (conversorDeMoneda (5000))

//Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
//Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
//Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

function mostrarTablaDeMultiplicar(numero) {
    for (var i = 1; i <= 10; i++) {
      var resultado = numero * i;
      console.log(numero + " x " + i + " = " + resultado);
    }
  }
  // Ejemplo de uso
  let numero = 7;
  mostrarTablaDeMultiplicar(numero);
  