window.onload = inicio;

function inicio() {
    var buscadora = document.querySelectorAll("img");
    console.log(buscadora);
    let temporizador = setInterval(tiempo, 500);

    function tiempo() {
        buscadora.forEach(accion);

        function accion(item, indice) {
            let num1 = Math.ceil(Math.random() * 3);
            item.className = "borde" + num1;

        }
    }

}