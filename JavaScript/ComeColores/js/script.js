window.onload = inicio;

let btn1 = document.getElementById("avanzar1");
let btn2 = document.getElementById("avanzar2");
let cuerpo = document.querySelector("body")
const componentes = [];

function inicio() {
    let contenedorP = document.createElement("div");
    contenedorP.className = "container";
    let contenedorS = document.createElement("div");
    contenedorS.className = "gallery";
    contenedorP.appendChild(contenedorS);
    cuerpo.appendChild(contenedorP);

    crearCajas();

    function crearCajas() {
        for (let i = 0; i < 40; i++) {
            let caja = document.createElement("div");
            caja.className = "fondo";

            componentes.push(caja);
            contenedorS.appendChild(caja);
        }
    }

    btn2.disabled = true;
    btn1.onclick = avan1;

    function avan1() {
        var numeroCaja = 0;
        let contador1 = setInterval(cambioR, 500);
        function cambioR() {
            componentes[numeroCaja].style.backgroundColor = "red";
            if (numeroCaja != 0) {
                componentes[numeroCaja - 1].style.backgroundColor = "green";
                numeroCaja++;
            } else {
                numeroCaja++;
            }
        }
    }

    function avan2() {
        var numeroCaja2 = 0;
        let contador2 = setInterval(cambioRV, 500);
        function cambioRV() {
            if (componentes.length == numeroCaja2) {
                numeroCaja2 = 0;
            }
            if (componentes[numeroCaja2].style.backgroundColor == "red") {
                componentes[numeroCaja2].style.backgroundColor = "green";
            } else {
                componentes[numeroCaja2].style.backgroundColor = "red";
            }
            numeroCaja2++;

        }
    }
}