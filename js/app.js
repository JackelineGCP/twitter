window.addEventListener('load', function(){

//declaro mis variables
var boton = document.getElementById('button');
var letter = document.getElementById('text');
var textconte = document.getElementById('textconte');


//defino mis eventos
boton.addEventListener('click',function(){
  var contenido = document.getElementById("text").value;
  textconte.value = contenido;


  //textconte.textContent = letter.textContent;//capturo el texto del objeto


})

});
