/**
 * BUCLES MODERNOS
 */

const numbers = [1, 2, 3, 4];

/**
 * forEach
 */
numbers.forEach(n => {
  console.log(n);
});

/* =======================
   EJERCICIOS
======================= */

/**
 * 1. Recorre un array de nombres con forEach.
 * 2. Imprime cada elemento con un mensaje.
 * 3. ¿Por qué evitar el for clásico?
 */

// 1. Recorrer un array de nombrees
const names = ["Ana", "Luis", "Maria"];
names.forEach(name => {
  console.log(name);
});

// 2. Imprimir cada elemento con un mensaje
names.forEach(name => {
  console.log(`Hola ${name}`);
});

// 3.
// Se evita el for clásico porque es más propenso a errores (índices, condiciones).
// forEach es más legible y expresivo para recorrer arrays.

