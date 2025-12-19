/**
 * CONDICIONALES
 */

const age = 18;

/**
 * if / else
 */
if (age >= 18) {
  console.log("Adulto");
} else {
  console.log("Menor");
}

/**
 * Operador ternario
 */
const message = age >= 18 ? "Adulto" : "Menor";
console.log(message);

/* =======================
   EJERCICIOS
======================= */

/**
 * 1. Crea una condición que evalúe si un número es positivo.
 * 2. Usa operador ternario para mostrar un mensaje.
 * 3. ¿Cuándo usar ternario y cuándo if?
 */

// 1. Evaluamos si un numero es positivo
if (age > 0) {
  console.log('Numero positivo');
}

// Mensaje operador ternario
const name = 'Jherly';
const saludo = name === 'Jherly' ? 'Bienvenido Jherly' : 'Quien es usted';
console.log(saludo);

// 3.
//El if se usa cuando hay varias condiciones o lógica compleja.
// El operador ternario se usa para decisiones simples que devuelven un valor.
