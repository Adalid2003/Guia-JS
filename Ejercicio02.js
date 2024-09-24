let nombre = document.getElementById("nombre");
let carnet = document.getElementById("carnet");
let notaExamen = document.getElementById("examen");
let notaTareas = document.getElementById("tareas");
let notaAsistencia = document.getElementById("asistencia");
let notaInvestigacion = document.getElementById("investigacion");
let boton = document.getElementById("enviar");
let respuesta = document.getElementById("resultado");

function calcularPromedio(examen, tareas, asistencia, investigacion){
    tareas = tareas * 0.40;
    examen = examen * 0.20;
    asistencia = asistencia * 0.10;
    investigacion = investigacion * 0.30;
    let resultado = (tareas + examen + asistencia + investigacion) / 4;
    return resultado;
}

boton.addEventListener('click', function(){
    respuesta.innerHTML = '<h1>Nombre: '+nombre+', Carnet: '+carnet+', Promedio: '+calcularPromedio(examen, tareas, asistencia, investigacion);+'</h1>';
});