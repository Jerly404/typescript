/**
 * OBJETOS
 *
 * Los objetos almacenan información relacionada.
**/
const user = {
  id: 1,
  name: "Jherly",
  email: "jerly@gamil.com",
  active: true
};
console.log(user);

/**
 * Acceso a propiedades
 **/
console.log(user.name);
console.log(user["email"]);

/**
 * Modificar propiedades
**/
user.active = false;
console.log(user.active);

/**
 * EJERCICIOS
**/

/**
 * 1. Crea un objeto que represente un libro.
 * 2. Accede a sus propiedades usando ambas formas.
 * 3. Modifica una propiedad del objeto.
 */

// 1. Creamos un objeto con id, name, author y personaje principal.
const book = {
  id: 1,
  name: 'EL señor De Los Anillos',
  author: 'J.R.R Tolkien',
  mainCharacter: 'Frodo Bolsón'
};
console.log(book);

// 2, Accedemos al objeto de las dos formas.
console.log(book.name);
console.log(book["author"]);

// 3. Vamos a modificar el personaje principal.
book.name = 'El Señor de los Anillos II';
console.log(book.name);

