window.onload = inicio;

function inicio() {
    var buscadora = document.querySelectorAll("img");
    var globalA = document.querySelector("*");
    globalA.style.cssText = "box-sizing: border-box";
    console.log(buscadora);

    let cajaP = document.querySelector(".container");
    cajaP.style.cssText = "border:1px solid black; border - radius: 1rem; margin: 50px auto; padding: 1rem; width: 70 %;";
    let galeria = document.querySelector(".gallery");
    galeria.style.cssText = "display:flex;" +
        "flex-wrap: wrap;" +
        "justify-content: center;" +
        "padding:1rem;";
    let imagenes = document.querySelectorAll("gallery img");
    imagenes.forEach(accion);

    function accion() {
        item.style.cssText = "margin: 1rem 1rem;"
            + "width: 15%;";
    }
}