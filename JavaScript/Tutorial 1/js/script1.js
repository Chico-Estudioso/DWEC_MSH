console.log("Entro en el javaScript")
//la funcion llamada inicio es llamada por el objeto window del navegador
//cuando termine de cargar (load) todo el DOM del HTML
//Funciones útiles de windows: alert , promt , confirm
window.addEventListener("load",inicio);
//Estos 2 Window hacen lo mismo
//window.onload=inicio;
function inicio(){
    cargarAleatorio();
    //alert(" Estoy dentro de la función inicio ");
    //prompt("Teclea a tu nombre", "");
    //se guarda en una variable en js el valor completo cuyo id es "etiqueta1"
    function cargarAleatorio(){
        let primeraEtiqueta=document.getElementById("etiqueta1");
        let segundaEtiqueta=document.getElementById("etiqueta2");
        primeraEtiqueta.textContent=Math.round(Math.random()*100);
        segundaEtiqueta.textContent=Math.round(Math.random()*100);
    }
    //identificar el objeto button cuyo id es btn1 y lo guardamos en la variable recargar
    let recargar=document.getElementById("btn1");
    //generar un evento de tipo "click" simple sobre el button de id=btn1
    recargar.addEventListener("click", accion1);
    function accion1(){
        console.log("RECARGANDO RANDOM");
        cargarAleatorio();
    }
    //otra forma de cargar eventos
    let boton2=document.getElementById("btn2");
    boton2.onclick=accion2;
    function accion2(){
        console.log("Entro en el segundo evento");
        for (let item of listaElementosli){
            console.log(item);
            item.textContent=Math.round(Math.random()*100);
        }
    }
    //generar un array de componentes html
    const listaElementosli=document.getElementsByTagName("li");
    console.log(listaElementosli);

    //identificar el boton 3
    let boton3=document.getElementById("btn3");
    //evento sobre este boton
    boton3.onclick=accion3;
    //desarrollo de elemento boton 3
    function accion3(){
        console.log("Entro en acción 3");
        for (let item of listaElementosli){
            let numero=Math.round(Math.random()*1000);
            //contenido
            item.textContent=numero;
            //item es como la i de los for de java,  siendo este el elemento 
            //que recorre cada uno de los li que contiene listaElementosli
            //formato condicional
            if(numero>500){
                item.style.color="Red";
            }else{
                item.style.color="Blue";
            }
        }

    }
}