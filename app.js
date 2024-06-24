let nroSecreto = 0
console.log(nroSecreto);
let nroSorteados = [];

function verificarValor (){
    let numeroDeUsuario = parseInt(document.getElementById ("valorUsuario").value);
    console.log(nroSecreto);
    console.log(numeroDeUsuario);
    console.log(typeof(numeroDeUsuario));
    console.log(nroSecreto == numeroDeUsuario);
    return
}
function parametrosDeElementos(elemento, texto){
    let elementosHtml = document.querySelector(elemento);
    elementosHtml.innerHTML = (texto);
    return
}
parametrosDeElementos("h1", "Juego del Nro Secreto");
parametrosDeElementos("p","Indica un numero del 1 al 10");

function generarNroSecreto() {
    let nroGenerado = Math.floor(Math.random()*10)+1;
    console.log(nroGenerado)
// Si el nro generado esta incluido en la lista
if (nroSorteados.includes(nroGenerado)) {
    return generarNroSecreto()
}else{
    nroSorteados.push(nroGenerado);
    return nroGenerado;
}
}