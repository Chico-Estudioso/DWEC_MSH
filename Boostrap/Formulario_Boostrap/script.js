window.onload = inicio;

function inicio() {
    let btnAceptar = document.getElementById("aceptar");
    btnAceptar.onclick = obtenerDatos;
}

function obtenerDatos() {
    let ciclo = document.querySelector("input[name=radio]").value;
    let modulos = document.querySelectorAll("input[name=modulos]");

    let marcados = [];
    modulos.forEach(obtenerMarcados);

    function obtenerMarcados(item, index) {
        if (item.checked) {
            marcados.push(item.value);
        }
    }

    let nombre = document.getElementById("nombre").value;
    let curso = document.getElementById("selectCurso").value;
    let horas = document.querySelectorAll("select[multiple]");

    let horasMarcadas = [];
    horas.forEach(obtenerHoras);

    function obtenerHoras(item, index) {
        if (item.selected) {
            horasMarcadas.push(item.value);
        }
    }
    let comentario = document.getElementById("exampleFormControlTextarea1").value;

    let mensaje =
        "Ciclo: " +
        ciclo +
        "\nModulos:  " +
        marcados +
        "\n" +
        nombre +
        "\nCurso: " +
        curso +
        "\nHoras asistidas: " +
        horasMarcadas +
        "\nComentario: " +
        comentario;
    alert(mensaje);
}
