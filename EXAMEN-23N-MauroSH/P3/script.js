window.onload = inicio;

let btnPDF = document.getElementById("generarPDF");

var tablaHTML = document.getElementById("cestaCompra");
var bloqueContenidoTR = document.createElement("tr");

function inicio() {
    cargarContenido();
}

function cargarContenido() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            objeto = JSON.parse(this.responseText);
            crearPDF();
        }
    };
    xhr.open(
        "GET",
        "http://moralo.atwebpages.com/menuAjax/productos3/getProductos.php",
        true
    );
    xhr.send();
}

function crearPDF() {

    objeto.forEach(rellenarPDF);
    function rellenarPDF(item, index) {
        if (item.stockMinimo > item.stockActual) {
            let restante = 0;
            let vector = [];
            restante = item.stockMinimo - item.stockActual;

            vector.push(item.name, item.price, restante);

            bloqueContenidoTR.innerHTML +='<tr>'+ '<td>' + vector[0] + '</td>' +
                '<td>' + vector[1] + '</td>' +
                '<td>' + vector[2] + '</td>'+'</tr>';

            tablaHTML.appendChild(bloqueContenidoTR);

            // let vectorX = vector.split(",");
            // bloqueContenidoTR += '<td>' + vectorX[0] + '</td>' +
            //     '<td>' + vectorX[1] + '</td>' +
            //     '<td>' + vectorX[2] + '</td>';
            console.log();
        }

    }
    btnPDF.onclick = completarPDF;

}

function completarPDF() {
    console.log("Entro a Completar");
    let estilo = "<style>" +
        "table {width: 100%;font: 17px Calibri;}" +
        "table, th, td {border: solid 1px #DDD; border-collapse: collapse;" +
        "padding: 2px 3px;text-align: center;}" +
        "</style>";

    let win = window.open("ticket.pdf", "Fruteria", "height=700,width=700");
    win.document.write('<html><head>');
    win.document.write('<title>Ticket</title>'); //cabecera del pdf
    win.document.write(estilo); // estilo cabecera
    win.document.write('</head>');
    win.document.write('<body>');
    win.document.write(tablaHTML);
    win.document.write("<table>");
    win.document.write()
    win.document.write("</table>");
    win.document.write('</body></html>');
    win.print();
}