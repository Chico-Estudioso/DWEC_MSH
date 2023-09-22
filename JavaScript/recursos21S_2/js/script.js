window.addEventListener("load", inicio);
//Indentificar componentes html
let contenedorPrincipal = document.getElementById("contenedorP");
let spPuntos = document.getElementById("sppuntos");
let btnJugar = document.getElementById("jugar");
//declarar vectores
const colores = ["Red", "Green", "Blue", "Orange", "Yellow", "Pink", "Brown"];
const nombres = ["Red", "Green", "Blue", "Orange", "Yellow", "Pink", "Brown"];
//variable
let tiempo;
let contadorSegundos = 30;
let puntos = 0;

function inicio() {
    console.log("Entro a inicio");
    let campo = document.createElement("fieldset")
    //Incorpora al nuevo componente creado el estilo de clase .container en el css
    campo.className = "container";
    let leyenda = document.createElement("legend");
    leyenda.textContent = "Juegos 21 S";
    //Añadir campo al contenedor principal
    contenedorPrincipal.appendChild(campo);
    campo.appendChild(leyenda);
    //contenedor de los 15 botones
    let contenedorFlex = document.createElement("div");
    contenedorFlex.className = "gallery";
    //crear los 15 botones
    for (let i = 0; i < 15; i++) {
        let divs = document.createElement("div");
        divs.className = "fondo";
        divs.setAttribute("Name", "cajasJuego");
        contenedorFlex.appendChild(divs);
    }
    campo.appendChild(contenedorFlex);
    btnJugar.onclick = Jugar;

    function Jugar() {
        console.log("Entro en jugar");
        contadorSegundos = 30;
        puntos = 0;
        btnJugar.disabled = true;
        cargarInfo();
        cargarColoresJuegos();

        //temporizador
        tiempo = setInterval(accion, 1000);
    }

    function accion() {
        if (contadorSegundos > 0) {
            contadorSegundos--;
            cargarInfo();
        } else {
            limpiarDivs();
            clearInterval(tiempo);
            alert("FIN DE PARTIDA");

        }
        if (contadorSegundos == 0) {
            limpiarDivs();
        } else {
            if (contadorSegundos % 5 == 0) {
                cargarColoresJuegos();
            }
        }

    }

    function limpiarDivs() {
        let arrayCajasJuego = document.getElementsByName("cajasJuego");
        arrayCajasJuego.forEach(function (item, posicion) {
            item.onclick = function () { };

        });
    }

    function cargarInfo() {
        spPuntos.textContent = "Puntos: " + puntos + "-----Tiempo: " + contadorSegundos;
    }

    function cargarColoresJuegos() {
        let arrayCajasJuego = document.getElementsByName("cajasJuego");
        //For each
        arrayCajasJuego.forEach(function (item, posicion) {
            let numColorFondo = Math.round(Math.random() * 6);
            let numTextoFondo = Math.floor(Math.random() * nombres.length);
            item.style.backgroundColor = colores[numColorFondo];
            item.textContent = nombres[numTextoFondo];
            item.onclick = comprobar;
            function comprobar() {
                if (numColorFondo == numTextoFondo) {
                    puntos++;
                    item.onclick = function () { };
                } else {
                    puntos--;
                    item.onclick = function () { };
                }
                cargarInfo();
            }
        });
    }
}