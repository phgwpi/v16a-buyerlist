function horapi(){
	 var tiempo = new Date();
	 var hora, cad="son las ";
	 with (tiempo){
	 hora = getHours();
	 cad += hora + ":" + getMinutes()+":"+getSeconds();
	 }
	 
       if (hora < 5)
	      cad = " | Buenas madrugadas, "+ cad + "     | ¿Preparando la lista de la compra de mañana?";	 	 	 
	         else if (hora < 13)
	         cad = " | Buenos d&iacute;as, "+ cad + "    | ¡A comprar!";
	        else if (hora < 20)
	        cad = " | Buenas tardes, "+ cad + "     | ¡A comprar!";
	        else 
	        cad = " | Buenas noches, " + cad + "     | ¿Preparando la lista de la compra de mañana?";  	 
	 return cad   
                 
	 }    
                      
                function fechapi(){
       var dia, mes,hora;
       var actual, fecha;
       
       dia=Array("Domingo","Lunes","Martes","Mi&eacute;rcoles","Jueves","Viernes","S&aacute;bado");
       mes=Array("enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre",
       "octubre","noviembre","diciembre");
       fecha=new Date();
       actual=dia[fecha.getDay()]+" , "+fecha.getDate()+" de " + mes [fecha.getMonth()] +" de " + fecha.getFullYear();
       
       return actual;
       }       
       document.write(fechapi() + horapi());       
         
         var myVar=setInterval(function(){myTimer()},1000);

		function myTimer() {
		    var d = new Date();
		    document.getElementById("digitalclock").innerHTML = d.toLocaleTimeString();
		}    




function borrando(form){borrar = form.reset();}

function comenzar(){
  var boton=document.getElementById("insertar");
  boton.addEventListener("click", itemNuevo, false);
}

function itemNuevo (){
  var seccion=document.getElementById("seccion").value;
  var articulo=document.getElementById("articulo").value;
  localStorage.setItem(seccion, articulo);

  leer_mostrar(seccion);
  document.getElementById("seccion").value="";
  document.getElementById("articulo").value="";
}

function leer_mostrar(seccion){
  var losdatos=document.getElementById("losdatos");
  losdatos.innerHTML='<div> <button onclick="eliminarTodo() ">Borrar lista</button></div>';  
  for (i=0;i<localStorage.length;i++){
    var seccion=localStorage.key(i);
    var elarticulo=localStorage.getItem(seccion);

 losdatos.innerHTML+='<div><span class="resalta">Seccion: </span> ' + seccion + '  <br>' + '<span class="resalta">Articulos:</span> ' + elarticulo + '<br><button class="bou" onclick="eliminarItem(\'' + seccion + '\')">Ya comprado</button></div>'; 


  }
}

function eliminarTodo(){
  if (confirm ("¡¡¡Eliminará toda la lista!!!")) {
      localStorage.clear();
      leer_mostrar();
  }
}

function eliminarItem(seccion){
  if (confirm ("¡Ya ha comprado este artículo y será borrado de la lista!")) {
   localStorage.removeItem(seccion);
   leer_mostrar();
  }

}

     function borrando(form){
			borrar = form.reset();
			}

window.addEventListener("load", comenzar, false);