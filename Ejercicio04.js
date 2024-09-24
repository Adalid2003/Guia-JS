function mayorDeDosNumeros(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

let numero1 = parseInt(prompt("Ingrese el primer número:"));
let numero2 = parseInt(prompt("Ingrese el segundo número:"));
let mayor = mayorDeDosNumeros(numero1, numero2);
console.log(`El número mayor es: ${mayor}`);