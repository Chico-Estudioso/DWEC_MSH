window.onload = inicio;

function inicio() {
    let btnMostrar = document.getElementById("btn");
    btnMostrar.addEventListener("click", mostrar);
    btnMostrar.onclick = mostrar;
}

function mostrar() {
    //Crear un objeto XMLhttpRequest
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = cargar;
    function cargar() {
        //CONTROL DE ESTADO Y ESTATUS DE LA PETICIÓN Y ESTADO DEL SERIDOR
        if (this.readyState == 4 && this.status == 200) {
            //he accedido al fichero de datos y está abierto el servidor
            //tengo que averiguar en que formato me llegan los datos para hacer el parseo
            var objeto = JSON.parse(this.responseText);
            let container = document.querySelector(".contenedor");
            container.innerHTML="";
            let num1 = Math.floor(Math.random() * 7);
            let divx = document.createElement('div');
            divx.className = "col-lg-3";
            divx.innerHTML = "<video src='" + objeto[num1].url + "' class='card' autoplay loop></video>";
            container.appendChild(divx);


        }
    }
    //PRIMERO SE HACE LA PETICIÓN
    xhr.open("GET", "http://camacho.atwebpages.com/webcam/getWebcam.php", true);
    xhr.send();
}