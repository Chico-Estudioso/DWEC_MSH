window.onload=inicio;
let cajaFrutas=document.querySelector("#cajaFrutas");
cajaFrutas.innerHTML="";
let bloqueHtml=document.createElement("div");
var objeto;

function inicio(){
    cargarContenido();
    console.log(objeto);
}
function cargarFrutas(){
    bloqueHtml.className="row";
    for(let i=0;i<objeto.length;i++){
        let vector=[];
        vector.push(objeto[i].id, objeto[i].name, objeto[i].photo, objeto[i].price);
        bloqueHtml.innerHTML+=
        '<div class="col-lg-4">'+
        '<img class="card-img-top" src='+objeto[i].photo+' width="90" height="90" alt='+objeto[i].id+'>'+
        '<div class="card-body" onclick=anadirCesta("'+vector+'")>'+
        '<h4 class="card-title">'+objeto[i].name+'</h4>'+
        '<p class="card-text">'+objeto[i].price+'</p></div></div>';
    }
    cajaFrutas.appendChild(bloqueHtml);
}
function cargarContenido(){
    var xhr=new XMLHttpRequest;
    xhr.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            objeto=JSON.parse(this.responseText);
            cargarFrutas();
        }
    }
    xhr.open("GET","http://moralo.atwebpages.com/menuAjax/productos/index.php", true);
    xhr.send();
}
function anadirCesta(vector){
    console.log(vector);

}