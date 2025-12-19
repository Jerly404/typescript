/**
 * FUNCIONES
 *
 * Las funciones permiten reutilizar código.
 */

/**
 * Función tradicional
 */
function sum(a, b) {
  return a + b;
}

/**
 * Arrow function
 * Muy usada en TypeScript y Angular
**/
const multiply = (a, b) => {
  return a * b;
};

/**
 * Arrow function simplificada
 **/
const subtract = (a, b) => a - b;

console.log(sum(2, 3));
console.log(multiply(4, 5));
console.log(subtract(10, 3));

/* =======================
   EJERCICIOS
======================= */

/**
 * 1. Crea una función que reciba dos números y retorne el mayor.
 * 2. Crea una arrow function que reciba un nombre y retorne un saludo.
 * 3. Explica la diferencia entre función tradicional y arrow function.
 */

// 1. Función tradicional
function mayor(a, b) {
  return a > b ? a : b;
}

console.log(mayor(3, 4));

// 2. Arrow function
const saludo = name => `Hola, ${name}`;

console.log(saludo("Jherly"));

/**
 * 3. Diferencias
 *
 * - Las funciones tradicionales tienen su propio `this`.
 * - Las arrow functions NO tienen `this`, lo heredan del contexto donde se crean.
 * - Las arrow functions no pueden usarse como constructor.
 * - Las arrow functions tienen una sintaxis más corta y clara.
 */

