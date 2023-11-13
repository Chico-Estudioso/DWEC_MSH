window.onload = inicio;
var tabla = document.querySelector("#cajaTabla");
var bloqueHtml = document.createElement("div");

function inicio() {
    let elemento = document.querySelector("#botonAdd");
    elemento.addEventListener("click", insertarUsuario);

    cargarTabla();
}
function cargarTabla() {
    console.log("entro en cargarTabla")

    bloqueHtml.innerHTML = "<div class='row'>" +
        "<div class='col-lg-2 text-center' >DNI</div>" +
        "<div class='col-lg-2 text-center' >NOMBRE</div>" +
        "<div class='col-lg-2 text-center' >APELLIDO</div>" +
        "<div class='col-lg-2 text-center' >TELEFONO</div>" +
        "<div class='col-lg-2 text-center' >ELIMINAR</div>" +
        "<div class='col-lg-2 text-center' >MODIFICAR</div></div>";
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {


        //CONTROL DE ESTADO DE LA PETICIÓN DE DATOS Y DEL ESTADO DEL SERVIDOR
        if (this.readyState == 4 && this.status == 200) {
            //he accedido al fichero de datos y está abierto el servidor
            //tengo que averiguar en qué formato me llegan los datos para hacer el parseo
            var objeto = JSON.parse(this.responseText);

            objeto.forEach(recorrer);

            function recorrer(clientes, index) {
                console.log("vector" + clientes.dni);
                let vector = [clientes.dni, clientes.nombre, clientes.apellido, clientes.telefono];
                bloqueHtml.innerHTML += "<div class='row'> " +
                    "<div class='col-lg-2 text-center'>" + clientes.dni + "</div>" +
                    "<div class='col-lg-2 text-center'>" + clientes.nombre + "</div>" +
                    "<div class='col-lg-2 text-center'>" + clientes.apellido + "</div>" +
                    "<div class='col-lg-2 text-center'>" + clientes.telefono + "</div>" +
                    //simular botón con a href añado clase btn btn-danger (color rojo)
                    "<div class='col-lg-2 text-center mb-2'><a class='btn btn-danger btn-md'" +
                    //anulo el href, no hay link , pero sí hay evento onclick con 
                    //parámetro incluido: dni de esa tupla
                    " href='javascript:void(0)' onclick=eliminar(\'" + clientes.dni + "\')>" +
                    //texto del botón e icono
                    "ELIMINAR<span class='glyphicon glyphicon-trash'></span> </a></div> " +
                    //td del modificar
                    "<div class='col-lg-2 text-center'><a class='btn btn-info btn-md' " +
                    "href='javascript:void(0)' onclick=modificar(" + vector + ")</td>" +
                    "MODIFICAR<span class='glyphicon glyphicon-pencil'></span> </a></div>";
            }
        }
    }
    //PRIMERO HAY QUE HACER LA PETICIÓN
    xhr.open("GET", " http://moralo.atwebpages.com/menuAjax/clientes/getClientes.php", true);
    xhr.send();

    tabla.appendChild(bloqueHtml);
}


function insertarUsuario() {

}
function eliminar(dni) {

}
function modificar(vector) {

}