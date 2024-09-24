function calcularPromedios() {
    
    let edadesMa = [
        parseInt(document.getElementById("ma1").value),
        parseInt(document.getElementById("ma2").value),
        parseInt(document.getElementById("ma3").value),
        parseInt(document.getElementById("ma4").value),
        parseInt(document.getElementById("ma5").value)
    ];
    let promedioMa = edadesMa.reduce((a, b) => a + b, 0) / edadesMa.length;

    
    let edadesTa = [
        parseInt(document.getElementById("ta1").value),
        parseInt(document.getElementById("ta2").value),
        parseInt(document.getElementById("ta3").value),
        parseInt(document.getElementById("ta4").value),
        parseInt(document.getElementById("ta5").value),
        parseInt(document.getElementById("ta6").value)
    ];
    let promedioTa = edadesTa.reduce((a, b) => a + b, 0) / edadesTa.length;

    
    let edadesNo = [
        parseInt(document.getElementById("no1").value),
        parseInt(document.getElementById("no2").value),
        parseInt(document.getElementById("no3").value),
        parseInt(document.getElementById("no4").value),
        parseInt(document.getElementById("no5").value),
        parseInt(document.getElementById("no6").value),
        parseInt(document.getElementById("no7").value),
        parseInt(document.getElementById("no8").value),
        parseInt(document.getElementById("no9").value),
        parseInt(document.getElementById("no10").value),
        parseInt(document.getElementById("no11").value)
    ];
    let promedioNo = edadesNo.reduce((a, b) => a + b, 0) / edadesNo.length;

    
    let mensaje = `Promedio Turno Mañana: ${promedioMa.toFixed(2)}<br>
                   Promedio Turno Tarde: ${promedioTa.toFixed(2)}<br>
                   Promedio Turno Noche: ${promedioNo.toFixed(2)}`;

    let maxPromedio = Math.max(promedioMa, promedioTa, promedioNo);
    if (maxPromedio === promedioMa) {
        mensaje += "<br>El turno con mayor promedio es: Mañana";
    } else if (maxPromedio === promedioTa) {
        mensaje += "<br>El turno con mayor promedio es: Tarde";
    } else {
        mensaje += "<br>El turno con mayor promedio es: Noche";
    }

    document.getElementById("resultados").innerHTML = mensaje;
}