window.addEventListener("load",mostrar);

        function mostrar() {
            const cajaX=document.querySelector("#cajaX");
 

            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = cargar;
            function cargar() {
                if (this.readyState == 4 && this.status == 200) {
                    //Al hacer parse nos devuelve un objeto
                    var objeto = JSON.parse(this.responseText);
                    
                   objeto.forEach(recorrer);
                   function recorrer(item,index){
                    
                    const divX = document.createElement('div'); 

                    divX.innerHTML = "<div class='col'>"+
                    "<div class='card shadow-sm'>"+
                      
                   
                    "<img src="+item.imagen+"</img>"+
        
                      "<div >"+
                     
                      "<p class='card-text'>"+item.texto+"</p>"+
                      "<div class='d-flex justify-content-between align-items-center'>"+
                         "<div class='btn-group'>"+
                         "<p class='card-text'>"+item.subtexto+"</p>"+
                            "<button type='button' class='btn btn-sm btn-outline-secondary'>View</button>"+
                         "   <button type='button' class='btn btn-sm btn-outline-secondary'>Edit</button>"+
                         " </div>"+
                          "<small class='text-muted'>9 mins</small>"+
                        "</div>"+
                     " </div>"+
                   " </div>"+
                "  </div>";
                
                   cajaX.appendChild(divX);
                    
                  
                   }
                
            }
             }
            xhr.open("GET", "http://camacho.atwebpages.com/jumbotronAleatorio/getImagenes.php", true);
            xhr.send();
       
        }