window.onload = inicio;
var tabla = document.querySelector("#cajaTabla");
var bloqueHtml = document.createElement("div");
function inicio() {
    let btn = document.querySelector("#btnAdd");
    btn.addEventListener("click", insertarUsuario);
    cargarTabla();
}
function cargarTabla() {
    bloqueHtml.innerHTML =
        "<div class='row'>" +
        "<div class='col-lg-2 text-center' >DNI</div>" +
        "<div class='col-lg-2 text-center' >NOMBRE</div>" +
        "<div class='col-lg-2 text-center' >APELLIDO</div>" +
        "<div class='col-lg-2 text-center' >TELEFONO</div>" +
        "<div class='col-lg-2 text-center' >ELIMINAR</div>" +
        "<div class='col-lg-2 text-center' >MODIFICAR</div></div>";
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = cargar;
    function cargar() {
        if (this.readyState == 4 && this.status == 200) {
            var objeto = JSON.parse(this.responseText);
            objeto.foreach(recorrer);

            function recorrer(clientes, index) {
                bloqueHtml += "<tr> <td>" + clientes.dni + "</td>"
                    + "<td>" + clientes.nombre + "</td>" +
                    + "<td>" + clientes.apellido + "</td>" +
                    + "<td>" + "<a class='btn btn-danger btn-md' href='javascript:void(0)' onclick=modificar(\"' + clientes.dni + \"')>MODIFICAR</a>" + "</td>" +
                    + "<td>" + "<a class='btn btn-danger btn-md' href='javascript:void(0)' onclick=eliminar(\"' + clientes.dni + \"')>ELIMINAR<span class='glyphicon glyphicon-trash'></a>" + "</td>" +
                    "</tr>";
            }
        }
    }
    xhr.open(
        "GET",
        "http://moralo.atwebpages.com/menuAjax/clientes/getClientes.php",
        true
    );
    xhr.send();
    tabla.appendChild(bloqueHtml);
}
function insertarUsuario() { }