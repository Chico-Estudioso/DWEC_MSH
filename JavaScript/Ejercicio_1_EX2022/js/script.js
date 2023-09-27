window.onload = inicio;
let btnM = document.getElementById("btn1");
const componentes = [];
function inicio() {
    let contenedorGlobal = document.createElement("div");
    contenedorGlobal.className = "container";
    let contenedorP = document.createElement("div");
    contenedorP.className = "gallery";
    let cuerpo = document.querySelector("body");
    cuerpo.appendChild(contenedorGlobal);
    contenedorGlobal.appendChild(contenedorP);
    let contenedorTodos = document.createElement("fieldset");
    let contenedorAzul = document.createElement("fieldset");
    let contenedorVerde = document.createElement("fieldset");
    let contenedorRojo = document.createElement("fieldset");
    let contenedorNaranja = document.createElement("fieldset");

    let leyendaTodos = document.createElement("legend");
    leyendaTodos.textContent = "Todos";
    let leyendaAzul = document.createElement("legend");
    leyendaAzul.textContent = "Azul";
    let leyendaVerde = document.createElement("legend");
    leyendaVerde.textContent = "Verde";
    let leyendaRojo = document.createElement("legend");
    leyendaRojo.textContent = "Rojo";
    let leyendaNaranja = document.createElement("legend");
    leyendaNaranja.textContent = "Naranja";

    contenedorP.appendChild(contenedorTodos);
    contenedorP.appendChild(contenedorAzul);
    contenedorP.appendChild(contenedorVerde);
    contenedorP.appendChild(contenedorRojo);
    contenedorP.appendChild(contenedorNaranja);

    contenedorTodos.appendChild(leyendaTodos);
    contenedorAzul.appendChild(leyendaAzul);
    contenedorVerde.appendChild(leyendaVerde);
    contenedorRojo.appendChild(leyendaRojo);
    contenedorNaranja.appendChild(leyendaNaranja);

    contenedorTodos.className = "gallery";
    contenedorAzul.className = "gallery";
    contenedorVerde.className = "gallery";
    contenedorRojo.className = "gallery";
    contenedorNaranja.className = "gallery";

    let colores = ["Orange", "Blue", "Green", "Red"];
    let coloresT = ["Naranja", "azul", "Verde", "Rojo"];

    for (let i = 0; i < 20; i++) {
        let num1 = Math.round(Math.random() * 3);
        let cajaColor = document.createElement("div");
        cajaColor.className = "gallery div";
        cajaColor.textContent = coloresT[num1];
        cajaColor.style.backgroundColor = colores[num1];
        componentes.push(cajaColor);
        contenedorTodos.appendChild(cajaColor);

    }


}