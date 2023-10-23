window.onload = inicio;
let bool = true;
function inicio() {
    let formulario = document.getElementById("validar");
    formulario.onsubmit = function () {
        let pass1 = document.getElementById("password1");
        let smPass1 = document.getElementById("smPassword1");

        let pass2 = document.getElementById("password2");
        let smPass2 = document.getElementById("smPassword2");

        let mail1 = document.getElementById("email");
        let smMail1 = document.getElementById("smEmail1");


        validarPassword(pass1, smPass1);
        comprobarPassword(pass1, pass2, smPass2);
        return bool;
        function validarPassword(passwd1, smPasswd1) {
            let cadena = String(passwd1);
            let longitudCadena = cadena.length;

            if (cadena == "") {
                bool = false;
                smPasswd1.innerHtml = "*campo obligatorio";
            } else if (longitudCadena < 8) {
                bool = false;
                smPasswd1.innerHtml = "*Debe de tener 8 caracteres";
            } else {
                // let mayus = false;
                // let indice = 0;
                // while (indice < longitudCadena && !mayus) {
                //     if (cadena.charAt(indice) == cadena.charAt(indice).toUpperCase) {
                //         mayus = true;
                //     }
                //     indice++;
                // }
                // if (mayus == false) {
                //     bool = false;
                //     smPasswd1.innerHtml = "*No Hay mayúsculas";
                // }
                if (!/[A-Z]/.test(cadena) || !/[a-z]/.test(cadena) || !/[0-9]/.test(cadena)) {
                    bool = false;
                    smPasswd1.innerHtml = "La contraseña no cumple los parámetros de seguridad";
                }
            }
        }
        function comprobarPassword(psswd1, psswd2, smPsswd2) {
            let cadena = String(pass2);
            if (psswd1 != psswd2) {
                bool = false;
                smPsswd2.innerHtml = "*Las contraseñas no coinciden";

            }
        }
    }



}