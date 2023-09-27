window.onload = inicio;
let btnM = document.getElementById("btn1");
function inicio() {
    let contenedorP = document.createElement("div");
    contenedorP.className("container");
    let cuerpo = document.querySelector("body");
    cuerpo.appendChild(contenedorP);
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

    contenedorTodos.appendChild(leyendaTodos);
    contenedorAzul.appendChild(leyendaAzul);
    contenedorVerde.appendChild(leyendaVerde);
    contenedorRojo.appendChild(leyendaRojo);
    contenedorNaranja.appendChild(leyendaNaranja);

}