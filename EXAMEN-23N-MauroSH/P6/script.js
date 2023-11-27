window.onload = inicio;

let cajaMediaM = document.getElementById("mediaM");
let cajaAprueban = document.getElementById("aprueban");
let cajaMismaN = document.getElementById("mismaN");
let cajaAprobadoS = document.getElementById("aprobadoS");

function inicio() {
    cargarContenido();
}

function cargarContenido() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            objeto = JSON.parse(this.responseText);
            cargarNotas();
        }
    };
    xhr.open(
        "GET",
        "http://moralo.atwebpages.com/menuAjax/dam1/getDam1.php",
        true
    );
    xhr.send();

}

function cargarNotas() {
    let nombreGanador = "";
    let mayor = 0;
    objeto.forEach(notasCargador);
    function notasCargador(item, index) {
        let notas = [parseFloat(item.nota1), parseFloat(item.nota2), parseFloat(item.nota3)];
        let suma = 0;
        suma = (notas[0] + notas[1] + notas[2]) / notas.length;
        //console.log(mayor);
        if (mayor < suma) {
            mayor = suma;
            nombreGanador = item.alumno;
        }
        cajaMediaM.innerHTML = '<div>El alumno con más nota media es: ' + nombreGanador + '</div>'


        //EJ 2
        console.log("Espabilao:");
        if (notas[0] >= 5 && notas[1] >= 5 && notas[2] >= 5) {
            cajaAprueban.innerHTML += '<div>El alumno: ' + item.alumno + ' tiene todos los exámenes aprobados</div>'
        }

        //EJ 3

        if (notas[0] == notas[1] && notas[1] == notas[2] && notas[0] == notas[2]) {
            cajaMismaN.innerHTML += '<div>El alumno: ' + item.alumno + ' tiene todos los exámenes con la misma nota</div>'
            //console.log(notas);
        }

        //Ej 4

        if (suma >= 5 && notas[0] < 5 || notas[1] < 5 || notas[2] < 5) {
            cajaAprobadoS.innerHTML += '<div>El alumno: ' + item.alumno + ' tiene  +5 de media pero con algún examen suspenso</div>'

        }
    }
}