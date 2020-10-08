
var i = 0;

 document.getElementById("collect").onclick = function collect() {
	
document.getElementById('screen').innerHTML =  i++ ;

  
    
}



 document.getElementById("restart").onclick = function restart(){

 	i = 0;

     document.getElementById('screen').innerHTML =  i ;
}




document.getElementById("background").onclick = function background() {
   var element = document.body;
   element.classList.toggle("dark-mode");
   document.getElementById("parent").classList.toggle("in-dark-mode");

}


 
 

