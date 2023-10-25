window.onload = inicio;

function inicio() {
    console.log("Entro en inicio");
    let validar = document.getElementById("validar");
    validar.onsubmit = validaciones;
    function validaciones() {
        alert("Hola");
        let bool_repetido = false;
        let numero1 = document.getElementById("idNumero1");
        let mensaje1 = document.getElementById("smNumero1");
        let numero2 = document.getElementById("idNumero2");
        let mensaje2 = document.getElementById("smNumero2");
        let numero3 = document.getElementById("idNumero3");
        let mensaje3 = document.getElementById("smNumero3");
        let numero4 = document.getElementById("idNumero4");
        let mensaje4 = document.getElementById("smNumero4");
        let arrayNumeros = [numero1, numero2, numero3, numero4];
        let infoRepetido = document.getElementById("smRepetido");
        for (let i = 0; i < arrayNumeros.length; i++) {
            for (let j = 0; j < arrayNumeros.length; j++) {
                if (arrayNumeros[i] == arrayNumeros[j] && i != j) {
                    bool_repetido = true;
                }
            }
        }
        if (!bool_repetido) {
            alert("HAY NUMEROS REPETIDOS");
            infoRepetido.innerHTML = "*Numeros repetidos";
        }
        validar(numero1, mensaje1);
        validar(numero2, mensaje2);
        validar(numero3, mensaje3);
        validar(numero4, mensaje4);
        function validar(num, men) {

        }
    }

}