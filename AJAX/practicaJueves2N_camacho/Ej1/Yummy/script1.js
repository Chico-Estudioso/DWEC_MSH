window.addEventListener("load",mostrar);

        function mostrar() {
            const cajaX=document.querySelector("#lunch");
 
console.log("entro en mostrar");
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = cargar;
            function cargar() {
                if (this.readyState == 4 && this.status == 200) {
                    //Al hacer parse nos devuelve un objeto
                    var objeto = JSON.parse(this.responseText);
                    
                   objeto.forEach(recorrer);
                   function recorrer(item,index){
                    
                    const divX = document.createElement('div'); 
                    divX.className='col-lg-4 menu-item';
                    divX.innerHTML="<div>"+
                   "<a href='#' class='glightbox'><img src='"+item.imagen+"' class='menu-img img-fluid' alt=''></a>"+
                   " <h4>"+item.nombre+"</h4>"+
                   " <p class='ingredients'>"+ item.ingredientes+
                    "</p>"+
                   " <p class='price'>"+item.precio+"</p></div>";
                   
                
                   cajaX.appendChild(divX);
                    
                  
                   }
                
            }
             }
            xhr.open("GET", "http://moralo.atwebpages.com/restaurante/getPlatos.php", true);
            xhr.send();
       
        }

