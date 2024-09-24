function analizarNumeros() {
    let negativos = 0;
    let positivos = 0;
    let multiplosDe15 = 0;
    let sumaPares = 0;

    for (let i = 0; i < 10; i++) {
        let numero = parseInt(prompt(`Ingrese el número ${i + 1}:`));

        if (numero < 0) {
            negativos++;
        } else if (numero > 0) {
            positivos++;
        }

        if (numero % 15 === 0) {
            multiplosDe15++;
        }

        if (numero % 2 === 0) {
            sumaPares += numero;
        }
    }

    console.log(`Cantidad de valores negativos: ${negativos}`);
    console.log(`Cantidad de valores positivos: ${positivos}`);
    console.log(`Cantidad de múltiplos de 15: ${multiplosDe15}`);
    console.log(`Suma de números pares: ${sumaPares}`);
}

