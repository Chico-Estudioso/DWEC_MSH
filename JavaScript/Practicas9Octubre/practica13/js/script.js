window.onload = inicio;

function inicio() {
    let enlaces = document.querySelectorAll("a");
    console.log(enlaces);

    var doe = 0;
    var dompt = 0;
    enlaces.forEach(accion);

    function accion(item, indice) {
        if (item.href.includes("doe")) {
            doe++;
        }
        if (item.href.includes(".pt")) {
            dompt++;
            setInterval(lanzar, 3000);
        }
    }
    console.log("Numero de apariciones de doe: " + doe + "\nDe dominios de Pogtughal: " + dompt);
}