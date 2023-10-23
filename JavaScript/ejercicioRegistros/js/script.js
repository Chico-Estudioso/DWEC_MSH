window.onload = inicio;

let bool = true;

function inicio() {
    let accion = document.getElementById("aceptar");
    accion.onsubmit = function () {
        let user1 = document.getElementById("user").value;
        let smUser = document.getElementById("smUser");

        let passwrd1 = document.getElementById("password1").value;
        let smPasswrd1 = document.getElementById("smPassword1");

        comprobar(user1, smUser, passwrd1, smPasswrd1);

        return bool;
    };
}

function comprobar(us1, smUs1, pas1, smPas1) {
    let cadena1 = String(us1);
    let cadena2 = String(pas1);

    if (cadena1 == "") {
        bool = false;
        smUs1.innerHtml = "*CAMPO OBLIGATORIO*";
    } else if (cadena2 == "") {
        bool = false;
        smPas1.innerHtml = "*CAMPO OBLIGATORIO*";
    }

}