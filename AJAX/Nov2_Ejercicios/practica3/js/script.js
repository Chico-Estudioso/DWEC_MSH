window.onload = inicio;

function inicio() {
    //Crear un objeto XMLhttpRequest
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = cargar;
    function cargar() {
        //CONTROL DE ESTADO Y ESTATUS DE LA PETICIÓN Y ESTADO DEL SERIDOR
        if (this.readyState == 4 && this.status == 200) {
            //he accedido al fichero de datos y está abierto el servidor
            //tengo que averiguar en que formato me llegan los datos para hacer el parseo
            var objeto = JSON.parse(this.responseText);
            let container = document.querySelector("album py-5 bg-light #container");

            let contador = 0;
            objeto.forEach(cargar);

            function cargar(item, indice) {
                container.innerHTML = "";
                console.log(contador + ": Contador 1º");
                let divx = document.createElement('div');
                divx.className = "col-lg-3";
                divx.innerHTML = "<img src='" + item.imagen + "' class='card'></img>";
                container.appendChild(divx);
            }
        }
        //PRIMERO SE HACE LA PETICIÓN
        xhr.open("GET", 'http://camacho.atwebpages.com/jumbotronAleatorio/getImagenes.php', true);
        xhr.send();
    }
}
