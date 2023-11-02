window.onload = inicio;

function inicio() {
    var buscadora = document.querySelectorAll("img");
    console.log(buscadora);
    let temporizador = setInterval(tiempo, 500);

    function tiempo() {
        buscadora.forEach(accion);

        function accion(item, indice) {
            let num1 = Math.ceil(Math.random() * 3);
            let num2 = Math.ceil(Math.random() * 5);
            item.src = "img/img" + num2 + ".jpg"; 
            item.className = "borde" + num1;
        }
    }

}