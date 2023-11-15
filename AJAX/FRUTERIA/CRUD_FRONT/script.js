window.onload = inicio;

let cajaFrutas = document.querySelector("#cajaFrutas");
cajaFrutas.innerHTML = "";
let bloqueHtml = document.createElement("div");
var objeto;
function inicio() {
    cargarContenido();
}

function cargarFrutas() {
    console.log("1");

    console.log(objeto);
    bloqueHtml.className = "row";
    for (let i = 0; i < objeto.length; i++) {
        bloqueHtml.innerHTML +=
            "<div class='col-lg-4'>" +
            "<img class='card-img-top' src='" + objeto[i].photo + "' width='90px' height='90px' alt='" + objeto[i].id + "' />" +
            "<div class='card - body'>" +
            "<h4 class='card - title'>" + objeto[i].name + "</h4>" +
            "<p class='card - text'>" + objeto[i].price + "</p>" +
            "</div>" +
            "</div>";
    }
    cajaFrutas.appendChild(bloqueHtml);

}

function cargarContenido() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            objeto = JSON.parse(this.responseText);
            cargarFrutas();
        }
        xhr.open(
            "GET",
            " http://moralo.atwebpages.com/menuAjax/productos/index.php",
            true
        );
        xhr.send();
    }
}