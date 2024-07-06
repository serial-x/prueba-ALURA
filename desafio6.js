//Crear una función que muestre "¡Hola, mundo!" en la consola.
function Bienvenida() {
    console.log ("¡Hola, mundo!");
    return
}
Bienvenida();


//Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
let nombre =prompt("Ingresá tu nombre");
function nombreIngreso(texto) {
    console.log(`¡Hola, ${texto}!`);
    return
}
nombreIngreso (nombre)

//Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
let numero =prompt("Ingresá un número");
function cuenta(valor) {
    return (valor * 2);
}
let resultado = cuenta(numero);

console.log(`Nro ingresado ${numero} el Doble ${(resultado)}`);

//Crear una función que reciba tres números como parámetros y devuelva su promedio.
function cuentaPromedios(num1, num2, num3) {
    console.log((num1+num2+num3)/3);
    return (num1+num2+num3)/3;
}
let promedio = cuentaPromedios (3,2,5);
console.log(promedio);

//Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function devuelveMayor (num1, num2) {
/*    if (num1 > num2) {
        return num1;
    }else{ (num1 < num2)
        return num2;
    }
*/
return num1 > num2 ? num1 : num2;   
}
let nroMayor = devuelveMayor (15, 101);
console.log(nroMayor);

//Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function cuadrado(numero) {
    return numero * numero;
  }
  
  let duplicado = cuadrado(2);
  console.log(duplicado);