function calcularDescuento(origen, destino) {
    let descuento;

    if (origen === "Palma") {
        switch (destino) {
            case "La costa del Sol":
                descuento = 0.05;
                break;
            case "Panchimalco":
                descuento = 0.10;
                break;
            case "Puerto el Triunfo":
                descuento = 0.15;
                break;
            default:
                descuento = 0;
        }
    } else {
        descuento = 0;
    }

    return descuento * 100;
}

let origen = "Palma";
let destino = "Panchimalco";
let descuento = calcularDescuento(origen, destino);
console.log(`Descuento: ${descuento}%`);
