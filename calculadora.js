// Función para sumar dos números
function sumar(a, b) {
    return a + b;
}

// Función para restar dos números
function restar(a, b) {
    return a - b;
}

// Función para multiplicar dos números
function multiplicar(a, b) {
    return a * b;
}

// Función para dividir dos números
function dividir(a, b) {
    return a / b;
}

// Función para calcular el seno de un número
function seno(numero) {
    return Math.sin(numero);
}

// Función para calcular el coseno de un número
function coseno(numero) {
    return Math.cos(numero);
}

// Función para calcular la raíz cuadrada de un número
function raizCuadrada(numero) {
    return Math.sqrt(numero);
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitar al usuario los valores
rl.question("Ingrese el primer valor: ", function(valor1) {
    rl.question("Ingrese el segundo valor: ", function(valor2) {
        // Convertir los valores a números
        valor1 = parseFloat(valor1);
        valor2 = parseFloat(valor2);

        // Realizar operaciones
        const suma = sumar(valor1, valor2);
        const resta = restar(valor1, valor2);
        const multiplicacion = multiplicar(valor1, valor2);
        const division = dividir(valor1, valor2);
        const senoValor1 = seno(valor1);
        const cosenoValor2 = coseno(valor2);
        const raizCuadradaValor1 = raizCuadrada(valor1);

        // Mostrar resultados
        console.log("Suma:", suma);
        console.log("Resta:", resta);
        console.log("Multiplicación:", multiplicacion);
        console.log("División:", division);
        console.log("Seno de valor 1:", senoValor1);
        console.log("Coseno de valor 2:", cosenoValor2);
        console.log("Raíz cuadrada de valor 1:", raizCuadradaValor1);

        rl.close();
    });
});

console.log('Calculadora');

    console.log('Cientifica');