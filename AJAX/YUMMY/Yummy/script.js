window.onload = inicio;
let cajaChefs = document.querySelector("#Caja-Chefs");
let bloqueHtml = document.createElement("div");
function inicio() {
    cargarContenido();
}

function cargarContenido() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log("Entro en contenido");
            objeto = JSON.parse(this.responseText);
            console.log(objeto);
            cajasChefs();
        }
    };
    xhr.open(
        "GET",
        "http://moralo.atwebpages.com/restaurante/getCocinero.php",
        true
    );
    xhr.send();

}

function cajasChefs() {
    console.log("Entro en cajasChefs");
    for (let i = 0; i < objeto.length; i++) {
        bloqueHtml.innerHTML += '<div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">' +
            '<div class="chef-member">' +
            '<div class="member-img">' +
            '<img src="' + objeto[i].imagen + '" class="img-fluid" alt="">' +
            '</div>' +
            '<div class="member-info">' +
            '<h4>' + objeto[i].nombre + '</h4>' +
            '<span>' + objeto[i].funcion + '</span>' +
            '<p>' + objeto[i].descripcion + '</p>' +
            '</div></div></div> ';
        bloqueHtml.appendChild(cajaChefs);
    }
}