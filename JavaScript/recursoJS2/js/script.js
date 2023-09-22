window.addEventListener("load", inicio);
//window.onload("Click", inicio);
var intervalo1;
var intervalo2;
var intervalo3;
var intervalo4;
function inicio() {
    console.log("Inicio completado")
    document.getElementById("btn1").addEventListener("click", function1);
    document.getElementById("btn2").addEventListener("click", function2);
    document.getElementById("btn3").addEventListener("click", function3);
    document.getElementById("btn4").onclick = function4;
    document.getElementById("btn5").onclick = function5;
    document.getElementById("btn6").addEventListener("click", function6);
    document.getElementById("btn7").onclick = function7;
    document.getElementById("btn8").onclick = function8;
    document.getElementById("btn9").onclick = function9;
    document.getElementById("btn10").onclick = function10;
    document.getElementById("btn11").onclick = function11;
    document.getElementById("btn12").onclick = function12;
    document.getElementById("btn13").onclick = function13;
    document.getElementById("btn14").onclick = function14;
    document.getElementById("btn15").onclick = function15;
    document.getElementById("btn16").onclick = function16;


    // FUNCIONES

    function function1() {
        //alert("Estoy en el evento 1");
        let numero1 = Math.round(Math.random() * 100);
        document.getElementById("c1").innerText = numero1;
        document.getElementById("c1").style.backgroundColor = "Green";
        // FORMAS DE IDENTIFICAR UN ELEMENTO
        // VINCULANDOLO A UN LET
        let caja1 = document.getElementById("c1");
        //USANDO UN WITH
        with (document.getElementById("c1")) {
            innerText = numero1;

            style.color = "Red";
            style.fontSize = "40px";
        }
    }

    function function2() {
        //alert("Estoy en el evento 2");

        //CREAMOS UNA CONSTANTE CON COLORES
        const colores = ["Red", "Green", "Gray", "Blue", "Purple", "Orange"];
        let indice = Math.round(Math.random() * 5);
        document.getElementById("c2").style.backgroundColor = colores[indice];
        document.getElementById("c2").textContent = indice;
        //caja2.style.backgroundColor=colores[indice];
    }

    function function3() {
        //alert("Estoy en el evento 3");

        // CON EL PROMT LEEMOS LO QUE NOS DE EL USUARIO
        let num1 = prompt("Introduzca el primer numero: ");
        let num2 = prompt("Introduzca el segundo numero: ");
        // ESTE PARSE PASA EL TIPO STRING DE LOS DATOS ANTERIORES A INT PARA SU SUMA

        let suma = parseInt(num1) + parseInt(num2);
        let caja3 = document.getElementById("c3");
        caja3.textContent = suma;
        caja3.style.backgroundColor = "Gray";


    }

    function function4() {
        //alert("Estoy en el evento 4");
        let numX = Math.round(Math.random() * 10);
        let numU = 11;
        let acumulador = 0;
        let fin = false;
        while (numX != numU && !fin) {
            let numU = parseInt(prompt("¿Cuál es el número Misterioso?"));
            if (numU < numX) {
                alert("El número X es mayor");
            }
            if (numU > numX) {
                alert("El numero X es menor");
            }
            if (numU == numX) {
                alert("HAS ACERTADO, EL NUMERO CORRECTO ES EL " + numU);
                fin = true;
            }
            acumulador++;
        }
        document.getElementById("c4").textContent = "El numero de intentos es: " + acumulador;
        document.getElementById("c4").style.backgroundColor = "Black";
        document.getElementById("c4").style.color = "White";
    }

    function function5() {
        //alert("Estoy en el evento 5");
        let fecha = new Date();
        document.getElementById("c5").innerText = fecha.getFullYear();
    }

    function function6() {
        //alert("Estoy en el evento 6");

        const fecha = new Date();
        let caja6 = document.getElementById("c6");
        caja6.innerText = [(fecha.getHours()) + ":" + (fecha.getMinutes())];
        caja6.innerText = [(fecha.getDay()) + "/" + (fecha.getMonth()) + "/" + (fecha.getFullYear())];
    }

    function function7() {
        let listaComponentes = document.getElementsByClassName("caja");
        let numRandom = Math.round(Math.random() * 100);
        console.log(listaComponentes);
        for (let item of listaComponentes) {
            console.log(item);
            item.textContent = Math.round(Math.random() * 100);
        }
    }

    function function8() {
        let elementList = document.getElementsByClassName("caja");
        let numero = 1
        for (let item of elementList) {
            element = prompt("Teclee un número para la caja " + numero);
            item.innerText = element;
            numero++;
        }
    }

    function function9() {
        let elementList = document.getElementsByClassName("caja");
        intervalo1 = setInterval(accionRandom, 1000);
        function accionRandom() {
            document.getElementById("c9").textContent = Math.round(Math.random() * 100);
        }
    }

    function function10() {
        const colores = ["Red", "Green", "Gray", "Blue", "Purple", "Orange", "Black", "Cyan"];
        let elementList = document.getElementsByClassName("caja");
        intervalo2 = setInterval(colorAleatorio, 100);
        function colorAleatorio() {
            for (element of elementList) {
                element.style.backgroundColor = colores[Math.round(Math.random() * 5)]
            }
        }
    }

    function function11() {
        console.log("DETENER TODO");
        clearInterval(intervalo1);
        clearInterval(intervalo2);
        clearInterval(intervalo3)
    }

    function function12() {
        let caja1 = document.getElementById("c1");
        let btn6 = document.getElementById("c12");
        btn6.setAttribute("disabled", true);
        const regresiva = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        intervalo3 = setInterval(numBehind, 1000);
        let num = 10;
        function numBehind() {
            if (num >= 0) {
                caja1.innerText = regresiva[num];
                btn6.setAttribute("disabled", false);
                num--;
            }
        }
    }

    function function13() {
        const colores = ["Red", "Green", "Gray", "Blue", "Purple", "Orange", "Black"];
        let segundos = 10;
        let aciertos = 0;
        let fallos = 0;
        intervalo4 = setInterval(juegoColores, 500);

        function juegoColores() {
            document.getElementById("c5").style.backgroundColor = "Red";
            if (segundos == 0) {
                clearInterval(intervalo4);
            } else {
                caja1 = document.getElementById("c1");
                caja2 = document.getElementById("c2");
                caja3 = document.getElementById("c3");
                caja4 = document.getElementById("c4");

                caja1.style.backgroundColor = colores[Math.round(Math.random() * 6)];
                caja2.style.backgroundColor = colores[Math.round(Math.random() * 6)];
                if (caja1.style.backgroundColor == caja2.style.backgroundColor) {
                    if (document.getElementById("c5").onclick) {
                        aciertos++;
                        caja3.textContent = "Tienes: " + aciertos + " aciertos totales";
                    }
                    else {
                        fallos++;
                        caja4.textContent = "Tienes: " + fallos + " fallos totales";
                    }
                } else if (caja1.style.backgroundColor != caja2.style.backgroundColor) {
                        if (document.getElementById("c5").onclick) {
                        fallos++;
                        caja4.textContent = "Tienes: " + fallos + " fallos totales";
                    }
                }
                segundos--;
            }

            console.log("Segundo menos: " + segundos);

        }
    }
}
