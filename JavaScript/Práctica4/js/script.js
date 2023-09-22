window.onload = inicio;

function inicio() {
    console.log("entro en inicio");
    const colores = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00"];
    const nombres = ["Red", "Green", "Blue", "Yellow"];
    let btnJugar = document.getElementById("jugar");
    btnJugar.onclick = empezar;
    let btnParar = document.getElementById("parar").onclick = stop;
    let caja = document.getElementById("fondo");
    let spTiempo = document.getElementById("spTiempo");
    let spPuntos = document.getElementById("spPuntos");
    var tiempo;
    var puntos = 0;
    var segundos = 30;

    //FUCTION

    function empezar() {
        btnJugar.disabled = true;
        tiempo = setInterval(juego, 1000);
    }

    function juego() {
        let num1 = Math.round(Math.random() * 3);
        caja.style.backgroundColor = colores[num1];
        let num2 = Math.round(Math.random() * 3);
        document.getElementById("txt1").textContent = "" + nombres[num2];
        spTiempo.textContent = "Tiempo restante: " + segundos;
        segundos--;
        if (segundos == 0) {
            clearInterval(tiempo);
        }
        caja.onclick = comprobar;
        function comprobar() {
            if (num1 == num2) {
                puntos++;
            } else {
                puntos--;
            }
            spPuntos.textContent = "" + puntos;
        }
    }
    function stop() {
        clearInterval(tiempo);
        puntos=0;
        segundos=30;
        spPuntos=0;
        spTiempo=30;
    }
}

