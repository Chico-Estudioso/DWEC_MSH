window.addEventListener("load", inicio);
let cajaP = document.getElementById("cajaPadre");
let btnJugar = document.getElementById("jugar");
let spPuntos = document.getElementById("sppuntos");
let spPuntos2 = document.getElementById("sppuntos2");
let igualdad = false;


function inicio() {
    console.log("Entro a inicio");
    btnJugar.onclick = Jugar();
}

function Jugar() {
    console.log("Entro en jugar");
    cargarImagenes();
    informacion();
}

function informacion() {
    if (igualdad == false) {
        spPuntos.textContent = "No hay ninguna igualdad";
    } else {
        spPuntos.textContent = "Hay mínimo 1 igualdad";
    }
}

function cargarImagenes() {
    for (let i = 0; i <= 5; i++) {
        let num1 = Math.round(Math.random() * 19);
        let imgs = document.createElement("img");
        imgs.className("cajas");
        let srcs = document.createAttribute("src");
        srcs = num1 + ".JPG";
        imgs.appendChild(srcs);
        cajaP.appendChild(imgs);
    }
    comprobarIgualdades();
}

function comprobarIgualdades() {
    let arrayImgs = document.getElementsByName("cajas");
    let comprobador1 = false;
    for (let i = 0; i <= 5; i++) {
        for (let j = 0; j <= 5; j++) {
            if (arrayImgs[i] == arrayImgs[j]) {
                comprobador1 = true;
            }
        }
    }
    if (comprobador1 == true) {
        igualdad = true;
    }

}