window.addEventListener("load", inicio);
let btnCom=document.getElementById("comenzar");
let btnFin=document.getElementById("Fin");
let num1=document.getElementById("numero1");
let num2=document.getElementById("numero2");
//let ope=document.getElementById("operador");
//const OperadoresM = ["+", "-", "*", "/", "%", "**"];
let tiempo;
let contadorSegundos = 30;
let puntos = 0;

function inicio(){
    console.log("Entrando al inicio")
    juego();
}

function juego(){
    let tiempo;
    let contadorSegundos = 30;
    let puntos = 0;
    btnCom.disabled=true;
    partida();

    tiempo=setInterval(timer, 10000);
}

function timer(){
    if(contadorSegundos>0){
        contadorSegundos--;
        actualizador();
    } else{
        clearInterval(tiempo);
        alert("FIN DE PARTIDA");
    }
}

function partida(){
    num1=Math.round(Math.random()*50);
    num2=Math.round(Math.random()*50);
    let resultadoEsc=parseFloat(document.getElementById("r1"));
    
    function comprobar(){
       if((num1*num2)==resultado){
        puntos++;
       }     
    }
}