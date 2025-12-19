/**
 * TIPOS PRIMITIVOS EN JAVASCRIPT
 * 
 * JavaScript es de tipado dinámico,
 * pero igual es importante conocer los tipos.
**/

const name = "Jerly";         // string
const age = 21;               // number
const active = true;          // boolean
const nothing = null;         // null
const notDefined = undefined  // undefined

/**
 * typeof permite ver el tipo de dato
**/
console.log(typeof name);
console.log(typeof age);
console.log(typeof active)

/**
 * Ejercicios
 *
 * 1. Declara una variable de cada tipo primitivo.
 * 2. Usa typeof para imprimir el tipo de cada variable.
 * 3. Explica la diferencia entre null y undefined.
 */

// 1. Tipos primitivos
const lastName = "Baration";   // string
const year = 2025;            // number
const isOld = false;          // boolean
const isStudent = null;       // null
let courses;                  // undefined

// 2. typeof
console.log(typeof lastName);   // string
console.log(typeof year);       // number
console.log(typeof isOld);      // boolean
console.log(typeof isStudent);  // object (error histórico)
console.log(typeof courses);    // undefined

/**
 * 3. Diferencia entre null y undefined
 *
 * - null: se asigna de forma intencional para indicar que una variable
 *   no tiene valor.
 *
 * - undefined: significa que la variable fue declarada pero aún no
 *   se le ha asignado ningún valor.
 *
 * Nota: typeof null devuelve "object" por un error histórico de JavaScript.
 */

