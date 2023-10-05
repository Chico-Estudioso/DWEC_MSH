window.onload = inicio;
const NUM_COLUMNAS = 3;
const NUM_CAJAS = 50;
const CAJAS_SORTEO = 6;
const componentes = [];

function inicio() {

    cuerpo = document.querySelector("body");
    let contenedorP = document.createElement("div");
    contenedorP.className = "container";
    cuerpo.appendChild(contenedorP);
    let contadorClick = 0;
    let btnJugar = document.createElement("button");
    btnJugar.textContent = "SORTEO";
    cuerpo.appendChild(btnJugar);
    btnJugar.onclick = jugar;

    for (let i = 0; i < NUM_COLUMNAS; i++) {
        let contenedorS = document.createElement("fieldset");
        contenedorS.className = "gallery";
        let leyenda = document.createElement("legend");
        leyenda.textContent = "Contenedor " + (i + 1);

        contenedorP.appendChild(contenedorS);
        contenedorS.appendChild(leyenda);

        for (let j = 0; j < NUM_CAJAS; j++) {

            let contenedorT = document.createElement("div");
            contenedorT.className = "gallery div";
            contenedorT.textContent = j + 1;
            contenedorS.appendChild(contenedorT);

            contenedorT.onclick = marcar;
            let v_numeros = [];

            function marcar() {
                if (contadorClick == 6) {
                    function accion(item, indice) {
                        if (item.style.backgroundColor == "red") {

                        }
                    }
                } else {
                    v_numeros.textContent = j;
                    componentes.forEach(accion);
                    contadorClick++;
                    contenedorT.style.backgroundColor = "red";
                }
            }
        }

    }
}
function jugar() {

    let contenedorSorteo = document.createElement("div");
    contenedorSorteo.className = "gallery2";
    cuerpo.appendChild(contenedorSorteo);
    let vectorN = [];
    for (let j = 0; j < CAJAS_SORTEO; j++) {
        do {
            num1 = Math.round(Math.random() * 50);
        } while (vectorN.includes(num1));
        vectorN.push(num1);
        vectorN.sort();
        let box = document.createElement("div");
        box.className = "gallery2 div";
        box.textContent = num1;
        contenedorSorteo.appendChild(box);
    }
    componentes.forEach(recorrido);

    let contAciertos = 0;

    let resul = document.createElement("div");
    resul.className = "gallery2 div";
    resul.style.backgroundColor = "blue";
    resul.textContent = contAciertos;

    function recorrido(item, index) {
        vectorN.forEach(recorrido2);

        function recorrido2(item2, index2) {
            contenedorSorteo.appendChild(resul);
            let contAciertos = 0;
            if (item.textContent == item2.textContent) {
                contAciertos++;
            }
        }
    }

}
