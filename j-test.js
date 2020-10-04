
var i = 0;

function collect() {
	
document.getElementById('screen').innerHTML =  i++ ;

  
    
}collect();


 function restart(){

 	i = 0;

     document.getElementById('screen').innerHTML =  i ;
}restart();




	function background() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}


 
 

