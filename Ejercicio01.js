let edad = document.getElementById('edad');
let div = document.getElementById('div');
let boton = document.getElementById('btn');
let edad1;
let respuesta;


boton.addEventListener('click', function(){
    edad1 = edad.value;
    console.log(edad1);
    edad1 >=18 ? respuesta = "Eres mayor de edad" : respuesta = "Eres menor de edad";
    console.log(respuesta);
    div.innerHTML ='<h1>'+respuesta+'</h1>';
});


