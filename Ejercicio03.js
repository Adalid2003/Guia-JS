function calcularAumento(nombre, salario, categoria) {
    let porcentajeAumento;

    switch (categoria) {
        case 'A':
            porcentajeAumento = 0.15;
            break;
        case 'B':
            porcentajeAumento = 0.30;
            break;
        case 'C':
            porcentajeAumento = 0.10;
            break;
        case 'D':
            porcentajeAumento = 0.20;
            break;
        default:
            porcentajeAumento = 0;
    }

    let aumento = salario * porcentajeAumento;

    console.log(`Nombre: ${nombre}`);
    console.log(`Salario: $${salario.toFixed(2)}`);
    console.log(`Categoría: ${categoria}`);
    console.log(`Aumento: $${aumento.toFixed(2)}`);
}

let nombre = "Juan Pérez";
let salario = 3000;
let categoria = "A";

calcularAumento(nombre, salario, categoria);
