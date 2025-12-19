/**
 * ARRAYS
 * 
 * Un array es una colección de elementos.
**/
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

/**
 * map -> transforma cada elemento
 **/
const doubled = numbers.map(n => n * 2);
console.log(doubled);

/**
 * filter -> filtra elementos
 **/
const greaterThanThree = numbers.filter(n => n > 3);
console.log(greaterThanThree);

/**
 * reduce -> reduce el array a un solo valor
 **/
const total = numbers.reduce((acc, n) => acc + n, 0);
console.log(total);

/* =======================
   EJERCICIOS
======================= */

/**
 * 1. Crea un array de nombres.
 * 2. Usa map para convertirlos a mayúsculas.
 * 3. Usa filter para quedarte solo con nombres largos.
 * 4. Usa reduce para contar cuántos elementos hay.
 */

const arrayNames = ["Jerly", "Jose", "Maria", "Carmen"];
console.log(arrayNames);

const mayusNames = arrayNames.map(name => name.toUpperCase())
console.log(mayusNames);

const nameLong = arrayNames.filter(name => name.length > 4);
console.log(nameLong);

const totalNames = arrayNames.reduce(contador => contador + 1, 0);
console.log(totalNames);
