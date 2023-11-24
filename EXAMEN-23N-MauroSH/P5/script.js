window.onload = inicio;

function inicio() {
    cargarContenido();
}

function cargarContenido() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            objeto = JSON.parse(this.responseText);
            cargarCarrousel();
        }
    };
    xhr.open(
        "GET",
        "http://camacho.atwebpages.com/carouselCiudades2/getCiudades.php",
        true
    );
    xhr.send();

}

function cargarCarrousel() {
    let contenedor = document.getElementById("contenedor");
    let lista = document.getElementById("lista");
    objeto.forEach(posicionarContenidos);

    function posicionarContenidos(item, index) {
        let elemento = document.createElement("li");
        elemento.setAttribute("data-target", "#myCarousel");
        elemento.setAttribute("data-slide-to", posicion);
        if (posicion == 0) {
            elemento.className = "active";
        }
        lista.appendChild(elemento);

        let caja = document.createElement("div");

        if (posicion == 0) {
            caja.className = "item active";
        } else {
            caja.className = "item";
        }

        caja.innerHTML=item.video

        contenedor.appendChild(caja);
    }
}