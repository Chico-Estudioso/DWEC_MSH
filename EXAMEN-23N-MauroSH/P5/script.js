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
        "http://camacho.atwebpages.com/carouselitemes2/getitemes.php",
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
        elemento.setAttribute("data-slide-to", index);

        if (index == 0) {
            elemento.className = "active";
        }

        lista.appendChild(elemento);

        let caja = document.createElement("div");
        if (index == 0) {
            caja.className = "item active";
        } else {
            caja.className = "item";
        }

        let video = document.createElement("div");
        video.innerHTML = item.video;

        let nombre = document.createElement("h1");
        nombre.textContent = item.item_nombre;
        let img = document.createElement("img");
        img.setAttribute("src", item.imagen);
        img.style = "width:100%;height:50vh;";
        caja.appendChild(video);
        caja.appendChild(nombre);
        caja.appendChild(img);
        contenedor.appendChild(caja);
    }
}