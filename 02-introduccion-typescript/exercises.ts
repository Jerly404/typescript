/**
 * 🏆 EJERCICIOS DE INTRODUCCIÓN A TYPESCRIPT
 * * En estos ejercicios practicaremos:
 * 1. Declaración de variables con tipos básicos.
 * 2. Inferencia de tipos.
 * 3. Prevención de errores en funciones.
 */

// --- EJERCICIO 1: El Superhéroe ---
// Instrucción: Declara las siguientes variables con sus tipos correspondientes:
// - nombre (string): "Logan"
// - edad (number): 150
// - estaVivo (boolean): true
// - poderes (array de strings): ['Regeneración', 'Garras de Adamantium']

// Tu código aquí:
let name: string = "Logan";
let age: number = 150;
let isAlive: boolean = true;
let powers: string[] = ['Regeneración', 'Garras de Adamantium'];

// --- EJERCICIO 2: Reparando la Función ---
// Instrucción: La siguiente función tiene un error potencial. 
// Añade los tipos a los parámetros para que solo acepte números.

function calcularAreaTriangulo(base: number, altura: number) {
  return (base * altura) / 2;
}

// Prueba la función aquí:
const resultado = calcularAreaTriangulo(10, 5);
console.log(`El área es: ${resultado}`);

// --- EJERCICIO 3: El validador de tipos ---
// Instrucción: TypeScript debería darte un error si intentas asignar 
// un valor incorrecto. Descomenta las líneas de abajo y observa qué dice VS Code.

let stock: number = 50;
// stock = "Agotado"; // ❌ Descomenta para ver el error de TS
// hay error porque se reasicnando un tipo string y la variable esta declarada como number.
stock = 45;         // ✅ Esto debería ser válido



// --- EJERCICIO 4: Inferencia de tipos ---
// Instrucción: Crea una variable llamada 'ciudad' y asígnale un valor. 
// No le pongas el tipo manualmente. Pasa el mouse sobre la variable.
// ¿Qué tipo le asignó TypeScript automáticamente?

// Tu código aquí:
let city = "Lima";
// Le asigna string, no uso vs code uso lazynvim en arch linux


// --- EJERCICIO 5 (BONUS): Transpilación ---
// Una vez termines, ejecuta en tu terminal:
// tsc ejercicios.ts
// Observa el archivo .js que se genera. ¿Qué cambió?

