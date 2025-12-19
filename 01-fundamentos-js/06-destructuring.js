/**
 * DESTRUCTURING
 *
 * Permite extraer valores de objetos o arrays.
 */

const user = {
  name: "Jerly",
  age: 22,
  country: "Perú"
};
console.log(user);

/**
 * Destructuring de objetos
 */
const { name, age } = user;

console.log(name);
console.log(age);

const numbers = [10, 20, 30];
console.log(numbers);

/**
 * Destructuring de arrays
 */
const [first, second] = numbers;

console.log(first);
console.log(second);

/* =======================
   EJERCICIOS
======================= */

/**
 * 1. Usa destructuring para extraer datos de un objeto.
 * 2. Usa destructuring en un array de 3 elementos.
 * 3. ¿Por qué destructuring hace el código más limpio?
 */
const objeto = {
  id: 1,
  name: 'Jose',
  lastName: 'Carvalo',
  nrc: 'N00293253',
  active: true
};

// 1. Extraemos lastName y nrc del objeto = objeto.
const { lastName, nrc } = objeto;
console.log('LastName:', lastName, 'NRC:', nrc)

// Array.
const array = [true, 'Jherly', 22];

// 2. Usamos destructuring en el array de 3 elementos.
const [firstValue, ThreeValue] = array;
console.log(firstValue, ThreeValue);

//3. Reduce líneas de código, evita repetir nombres de objetos y hace el codigo mas legible y claro.
