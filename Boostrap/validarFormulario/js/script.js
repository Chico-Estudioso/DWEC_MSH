window.onload = inicio();
let bool = true;
function inicio() {
    let expediente = document.getElementById("expediente").value;
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let dwec = document.getElementById("dwec").value;
    let dwes = document.getElementById("dwes").value;
    let diw = document.getElementById("diw").value;
    let eie = document.getElementById("eie").value;
    let ds = document.getElementById("ds").value;

    let smExpediente = document.getElementById("smExpediente");
    let smNombre = document.getElementById("smNombre");
    let smApellidos = document.getElementById("smApellidos");
    let smDwec = document.getElementById("smDwec");
    let smDwes = document.getElementById("smDwes");
    let smDiw = document.getElementById("smDiw");
    let smEie = document.getElementById("smEie");
    let smDs = document.getElementById("smDs");

    let btnAccion = document.getElementById("btnAccion");
    let accion = document.getElementById("accion");
    accion.onsubmit = function () {

        if (expediente == "" || nombre == "" || apellidos == "" || dwec == "" || dwes == null || diw == null || eie == null || ds == null) {
            bool = false;
            smExpediente.innerHTML = "*Campo Obligatorio";
            smNombre.innerHTML = "*Campo Obligatorio";
            smApellidos.innerHTML = "*Campo Obligatorio";
            smDwec.innerHTML = "*Campo Obligatorio";
            smDwes.innerHTML = "*Campo Obligatorio";
            smDiw.innerHTML = "*Campo Obligatorio";
            smEie.innerHTML = "*Campo Obligatorio";
            smDs.innerHTML = "*Campo Obligatorio";

        } else {
            let cadena = String(expediente);
            if (cadena.length > 6) {
                bool = false;
            } else {
                for (let i = 0; i < cadena.length - 1; i++) {
                    let caracter = cadena.charAt(i);
                    if (isNaN(caracter)) {
                        smExpediente.innerHTML = "*Obligatoriamente tiene que ser numero";
                        bool = false;
                    }
                }
                let caracter = cadena.charAt(cadena.length - 1);
                if (!/[A-Z]/.test(caracter)) {
                    smExpediente.innerHTML = "*No hay una letra al final de la cadena"
                    bool = false;
                }

                if (dwec < 1 || dwec > 10) {
                    bool = false;
                    smDwec.innerHTML = "*No cumple con el rango";
                }
            }
        }
        return bool;

    }


}