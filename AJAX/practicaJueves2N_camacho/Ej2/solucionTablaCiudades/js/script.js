window.addEventListener("load",mostrar);

        function mostrar() {
            const cajaX=document.querySelector("tbody");
 

            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = cargar;
            function cargar() {
                if (this.readyState == 4 && this.status == 200) {
                    //Al hacer parse nos devuelve un objeto
                    var objeto = JSON.parse(this.responseText);
                    
                   objeto.forEach(recorrer);
                   function recorrer(item,index){
                    
                    const trX = document.createElement('tr'); 

                    trX.innerHTML =  "<th scope='row' style='color: #666666;'>"+item.ciudad_nombre+"</th>"+
                    "<td>"+item.ciudad_poblacion+"</td>"+
                    "<td>"+item.video+"</td>"+
                    "<td><img src='"+item.imagen+"' width='400' height='200'></td>"+
                    "<td>"+item.mapa+"</td>"+
                    "<td>"+item.id+"</td></td>";


                   cajaX.appendChild(trX);
                    
                  
                   }
                
            }
             }
            xhr.open("GET", "http://camacho.atwebpages.com/carouselCiudades2/getCiudades.php", true);
            xhr.send();
       
        }

       
