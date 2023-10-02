window.onload = inicio;
const NUM_COLUMNAS = 3;
function inicio() {

    cuerpo = document.querySelector("body");
    contenedorP = document.createElement("div");
    contenedorP.className = "container";
    cuerpo.appendChild(contenedorP);

    for (let i = 0; i < NUM_COLUMNAS; i++) {
        contenedorS = document.createElement("fieldset");
        contenedorS.className = "gallery";
        let leyenda = document.createElement("legend");
        leyenda.textContent = "Contenedor " + (i + 1);
        

        contendorS.appendChild(leyenda);
        contenedorP.appendChild(contenedorS);
    }
}