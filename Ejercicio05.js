function calcularDescuento() {
    const cocheSeleccionado = document.getElementById("coche").value;
    let descuento;

    switch (cocheSeleccionado) {
        case "FORD FIESTA":
            descuento = 0.05; // 5%
            break;
        case "FORD FOCUS":
            descuento = 0.10; // 10%
            break;
        case "FORD ESCAPE":
            descuento = 0.20; // 20%
            break;
        default:
            descuento = 0; // Sin descuento
    }

}