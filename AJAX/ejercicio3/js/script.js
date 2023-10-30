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
            let container = document.querySelector("#contenedor");

            // setInterval(objeto.forEach(cargar), 3000);
            // function cargar(item, indice) {

            // }
            let contador = 0;
            setInterval(cargar, 3000);

            function cargar() {
                container.innerHTML = "";
                console.log(contador + ": Contador 1º");
                let divx = document.createElement('div');
                divx.className = "col-lg-3";
                if (contador < 7) {
                    divx.innerHTML = "<video src='" + objeto[contador].url + "' class='card' autoplay loop></video>";
                    container.appendChild(divx);
                    console.log(contador + ": Contador 2º");

                    contador++;
                } else {
                    contador = 0;
                    divx.innerHTML = "<video src='" + objeto[contador].url + "' class='card' autoplay loop></video>";
                    container.appendChild(divx);
                    contador++;
                }

            }
        }
    }
    //PRIMERO SE HACE LA PETICIÓN
    xhr.open("GET", 'JSON/getWebcam.json', true);
    xhr.send();
}