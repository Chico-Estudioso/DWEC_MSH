let accion = document.getElementById("validar");

let bool = true;

accion.onsubmit = function () {

    bool = true;

    //Declaramos el valor que tenga el input y el small para el mensaje de error
    let n1 = document.getElementById("idNumero1").value;
    let smNum1 = document.getElementById("smNumero1");

    let texto1 = document.getElementById("idTexto1").value;
    let smText1 = document.getElementById("smTexto1");

    let n2 = document.getElementById("idNumero2").value;
    let smNum2 = document.getElementById("smNumero2");

    let texto2 = document.getElementById("idTexto2").value;
    let smText2 = document.getElementById("smTexto2");

    //Validamos:
    //  1º Que no esté vacío.
    //  2º Que sea un número.
    //  3º Que sea un número entero.
    //  4º Que esté comprendido entre 1 y 50.
    //  Si no hay errores se limpia el elemento small.

    validacion1(n1, smNum1);
    validacion2(text1, smText1);
    validacion3(n2, smNum2);
    validacion4(text2, smText1);




    // let arrayNumeros = [n1, n2, n3, n4, n5, n6];
    // let arrayComparados = [];
    // let smDupl = document.getElementById("smDuplicados");
    // let bool2 = true;

    // for (let i = 0; i < arrayNumeros.length; i++) {
    //     if (arrayComparados.includes(arrayNumeros[i])) {
    //         bool2 = false;
    //     } else {
    //         arrayComparados.push(arrayNumeros[i]);
    //     }
    // }

    // if (bool2) {
    //     smDupl.innerHTML = "";
    // } else {
    //     bool = false;
    //     smDupl.innerHTML = "** ERROR NÚMEROS DUPLICADOS";
    // }

    return bool;

}

function validaciones(num, sm) {

    if (num == "") {
        sm.innerHTML = "* Campo obligatorio.";
        bool = false;
    } else if (isNaN(num)) {
        sm.innerHTML = "* Introduce un número.";
        bool = false;
    } else if (!Number.isInteger(Number(num))) {
        sm.innerHTML = "* Introduce un número entero.";
        bool = false;
    } else if (num < 1 || num > 50) {
        sm.innerHTML = "* Número fuera del rango (0-50).";
        bool = false;
    } else {
        sm.innerHTML = "";
    }


}

function validacion1(num, sm) {
    if (num == "") {
        sm.innerHTML = "* Campo obligatorio.";
        bool = false;
    } else if (isNaN(num)) {
        sm.innerHTML = "* Introduce un número.";
        bool = false;
    } else if (!Number.isInteger(Number(num))) {
        sm.innerHTML = "* Introduce un número entero.";
        bool = false;
    } else if (num < 1 || num > 100) {
        sm.innerHTML = "* Número fuera del rango (0-100).";
        bool = false;
    } else {
        sm.innerHTML = "";
    }
}

function validacion2(txt, sm) {
    if (num == "") {
        sm.innerHTML = "* Campo obligatorio.";
        bool = false;
    }
}

function validacion3(num, sm) {
    if (num == "") {
        sm.innerHTML = "* Campo obligatorio.";
        bool = false;
    }
}

function validacion4(txt, sm) {
    if (num == "") {
        sm.innerHTML = "* Campo obligatorio.";
        bool = false;
    }
}
