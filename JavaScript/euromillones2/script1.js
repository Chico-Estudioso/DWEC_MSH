let accion = document.getElementById("validar");

let bool = true;

accion.onsubmit = function () {

    bool = true;

    //Declaramos el valor que tenga el input y el small para el mensaje de error
    let n1 = document.getElementById("idNumero1").value;
    let smNum1 = document.getElementById("smNumero1");

    let texto1 = document.getElementById("idTexto1").value;
    let smTexto1 = document.getElementById("smTexto1");

    let n2 = document.getElementById("idNumero2").value;
    let smNum2 = document.getElementById("smNumero2");

    let texto2 = document.getElementById("idTexto2").value;
    let smTexto2 = document.getElementById("smTexto2");

    //Validamos:
    //  1º Que no esté vacío.
    //  2º Que sea un número.
    //  3º Que sea un número entero.
    //  4º Que esté comprendido entre 1 y 50.
    //  Si no hay errores se limpia el elemento small.

    validacion1(texto1, smTexto1);
    validacion2(texto2, smTexto2);
    validacion3(n1, smNum1);
    validacion4(n2, smNum2);

    return bool;

}

function validacion1(txt, sm) {

    if (txt == "") {
        sm.innerHTML = "* Campo obligatorio.";
        bool = false;
    }
    let cadena = String(txt);
    let longitud = cadena.length;

    console.log("Longitud de la cadena" + longitud);
    if (longitud <= 5 || longitud >= 15) {
        bool = false;
        sm.innerHTML = "* Texto no valido";
    }
    let contador = 0;
    let comprobadorM = falso;
    let comprobadorN = falso;

    while (contador < longitud || comprobadorM == true && comprobadorN == true) {
        if (cadena.indexOf(cadena.toUpperCase, contador)) {
            comprobadorM = true;
        }
        if (cadena.indexOf(cadena.Number.isInteger(Number(cadena)), contador)) {
            comprobadorN = true;
        }

    }

}

function validacion2(txt, sm) {
    if (txt == "") {
        sm.innerHTML = "* Campo obligatorio.";
        bool = false;
    }
    let cadena = String(txt);
    let longitud = cadena.length;
    if (longitud <= 20 || longitud >= 30) {
        bool = false;
        sm.innerHTML = "* Texto no valido";
    }
    let comprobadorArr = falso;

    while (contador < longitud || comprobadorArr == true) {
        if (cadena.indexOf("@", contador)) {
            comprobadorM = true;
        }
    }

}

function validacion3(num, sm) {

    if (num == "") {
        sm.innerHTML = "* Campo obligatorio.";
        bool = false;
    } else if (!Number.isInteger(Number(num))) {
        sm.innerHTML = "* Introduce un número entero.";
        bool = false;
    } else if (num <= 1 || num >= 10) {
        sm.innerHTML = "* Número fuera del rango (1-10).";
        bool = false;
    }


}

function validacion4(num, sm) {
    if (texto == "") {
        sm.innerHTML = "* Campo obligatorio.";
        bool = false;
    } else if (!Number.isInteger(Number(num))) {
        sm.innerHTML = "* Introduce un número entero.";
        bool = false;
    } else if (!num % 5 == 0) {
        sm.innerHTML = "* No es múltiplo de 5.";
        bool = false;
    }
}

