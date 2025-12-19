/**
 * SPREAD OPERATOR (...)
 *
 * Se usa para copiar objetos y arrays.
 */

const user = {
  name: "Jerly",
  age: 22
};

/**
 * Copia de objeto
 */
const userCopy = { ...user };

const numbers = [1, 2, 3];

/**
 * Copia de array
 */
const newNumbers = [...numbers, 4, 5];

console.log(userCopy);
console.log(newNumbers);

/* =======================
   EJERCICIOS
======================= */

/**
 * 1. Copia un objeto y agrega una nueva propiedad.
 * 2. Copia un array y agrega nuevos valores.
 * 3. Explica por qué esto ayuda a la inmutabilidad.
 */

// 1. Copiamos el objeto user y agregamos una propiedad country
const userCopyTwo = { ...user, country: 'Cajamarca' };
console.log(userCopyTwo);

// 2. Copiamos el array newNumbers y agregamos 2 valores (strings)
const newArray = [...newNumbers, 'Jherly', 'Perú'];
console.log(newArray);

/** 3. La inmutabilidad significa que no modificamos el objeto o array original. Usando el operador spread (...) creamos una copia. Esto evita errores, hace el código más seguro y permite trabajar con los datos sin afectar el original.
 */

// 5. Copia un objeto y cambia solo una propiedad
const newObject = { ...user, name: 'Jose' };
console.log(newObject);

// 6. Copia un array y elimina un elemento usando filter.
const copyArray = numbers.filter(number => number !== 2);
console.log(copyArray);

// 7. Copia un array de objetos y modifica solo uno
const arrayObjetos = [
  { id: 1, name: "Ana", age: 20 },
  { id: 2, name: "Luis", age: 17 },
  { id: 3, name: "Maria", age: 25 },
  { id: 4, name: "Pedro", age: 16 }
];

const copyArrayObjetos = arrayObjetos.map(obj =>
  obj.id === 3 ? { ...obj, name: "Jose" } : obj
);
console.log(copyArrayObjetos);
