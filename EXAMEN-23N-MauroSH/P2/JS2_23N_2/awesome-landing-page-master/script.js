window.onload = inicio;


let cajaCarousel = document.getElementById("inner-Carruseles");
let indicadoresCarousel = document.getElementById("Indicadores-Carrusel");

function inicio() {
    cargarContenido();
}


function cargarContenido() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            objeto = JSON.parse(this.responseText);
            cargarCarousel();
        }
    };
    xhr.open(
        "GET",
        "http://moralo.atwebpages.com/Empleados/getEmpleados.php",
        true
    );
    xhr.send();
}

function cargarCarousel() {
    objeto.forEach(posicionarContenido);

    function posicionarContenido(item, posicion) {
        console.log("Entro a posicionar");
        let elemento = document.createElement("li");
        elemento.setAttribute("data-target", "#inner-Carruseles");
        elemento.setAttribute("data-slide-to", posicion);

        if (posicion == 0) {
            elemento.className = "active";
        }

        indicadoresCarousel.appendChild(elemento);


        let caja = document.createElement("div");
        caja.className = "item";
        if (posicion == 0) {
            caja.className = "item active";
        } else {
            caja.className = "item";
        }

        caja.innerHTML =
            '<div class="mask">' +
            '<img src="' + item.imagen + '">' +
            '</div>' +
            '<div class="carousel-testimonial-caption">' +
            '<p>' + item.cargo + '</p>' +
            '<h3>' + item.direccion + '</h3>' +
            '</div></div> ';

        cajaCarousel.appendChild(caja);

    }
}