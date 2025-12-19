/* =====================================
   🟢 NIVEL FÁCIL
   Métodos de Arrays en JavaScript
===================================== */

/* ---------- 1️⃣ MAP ---------- */

// Multiplicar cada número por 3
const numbers = [1, 2, 3, 4, 5];
const tripledNumbers = numbers.map(number => number * 3);
console.log(tripledNumbers);

// Convertir nombres a minúsculas
const names = ["Jerly", "Javier", "Josue", "Carlos"];
const lowerCaseNames = names.map(name => name.toLowerCase());
console.log(lowerCaseNames);

// Agregar saludo a cada nombre
const greetings = names.map(name => `Hola ${name}`);
console.log(greetings);


/* ---------- 2️⃣ FILTER ---------- */

// Filtrar edades mayores o iguales a 18
const ages = [14, 19, 20, 24, 12, 13, 30];
const adults = ages.filter(age => age >= 18);
console.log(adults);

// Filtrar números positivos
const mixedNumbers = [-2, 2, 5, -9, 20, -14];
const positiveNumbers = mixedNumbers.filter(number => number > 0);
console.log(positiveNumbers);

// Filtrar nombres con exactamente 5 letras
const namesTwo = ["Ana", "Luis", "Pedro", "Maria", "Carlos", "Javier", "Fernanda", "Sofia"];
const namesFiveCharacters = namesTwo.filter(name => name.length === 5);
console.log(namesFiveCharacters);


/* ---------- 3️⃣ FOREACH ---------- */

// Mostrar nombre y posición
namesTwo.forEach((name, index) => {
  console.log(`${index}: ${name}`);
});

// Sumar números usando forEach
let total = 0;
numbers.forEach(number => {
  total += number;
});
console.log(total);


/* =====================================
   🟡 NIVEL MEDIO
   map + filter
===================================== */

// Filtrar nombres con más de 4 letras y convertirlos a mayúsculas
const namesThree = ["Jherly", "Jose", "Carmen", "Rouz"];
const longUpperNames = namesThree
  .filter(name => name.length > 4)
  .map(name => name.toUpperCase());

console.log(longUpperNames);

// Filtrar números pares y elevarlos al cuadrado
const evenSquaredNumbers = ages
  .filter(number => number % 2 === 0)
  .map(number => number ** 2);

console.log(evenSquaredNumbers);

// Sumar todos los números de un array.
const add = [2, 3, 8, 5, 10, 7];
const totalAdd = add.reduce((acc, number) => {
  return acc + number;
}, 0);
console.log(totalAdd);

// Contar cúantos números pares hay
const numerosPares = add.reduce((acc, number) => {
  if (number % 2 === 0) {
    acc += 1;
  }
  return acc;
}, 0);
console.log(numerosPares);

// Obtener el numero mayor del array
const numeroMayor = add.reduce((acc, number) => {
  return number > acc ? number : acc;
}, add[0]);
console.log(numeroMayor);

// Contar cuántos nombres tienen más de 5 letras
const nombreFive = ["Ana",        // 3 letras
  "Luis",       // 4 letras
  "Pedro",      // 5 letras
  "Maria",      // 5 letras
  "Carlos",     // 6 letras
  "Javier",     // 6 letras
  "Fernanda"    // 8 letras
];
const name5 = nombreFive.reduce((acc, character) => {
  if (character.length > 5) {
    acc += 1;
  }
  return acc;
}, 0);
console.log(name5);

// Encontrar el primer nombre que enpiece con "M"
const firstNameM = nombreFive.find(name => name.startsWith("M"));
console.log(firstNameM);

// Verificar si existe algun número negativo.
const numerosNegativos = [-1, 2, -5, 3];
const numNegativo = numerosNegativos.some(number => number < 0);
console.log(numNegativo);

// Verificar si todos los numeros son positivos
const numeroPositivos = numerosNegativos.every(number => number > 0);
console.log(numeroPositivos);


// Nivel Reto Arrays de objetos
const users = [
  { name: "Jerly", age: 21 },
  { name: "Maria", age: 17 },
  { name: "Jose", age: 25 },
  { name: "Carmen", age: 30 }
];

// Usar map para obtener solo los nombres
const soloNames = users.map(user => user['name']);
console.log(soloNames);

// Usa filter para obtener solo los usuarios mayores de edad.
const mayorAge = users.filter(user => user['age'] > 17);
console.log(mayorAge);

// Usa reduce para obtener la suma total de edades
const totalAge = users.reduce((acc, current) => {
  return acc + current.age;
}, 0);
console.log(totalAge);

// Usa reduce para obtener la edad promedio.
const averageAge =
  users.reduce((acc, user) => acc + user.age, 0) / users.length;
console.log(averageAge);

// Usa find para encontrar al usuario llamado Jose
const userJose = users.find(user => user.name === "Jose");
console.log(userJose.name);

// Convierte un array de strings en un solo string separado por comas usando reduce.
const strings = [
  "Ana",
  "Luis",
  "Pedro",
  "Maria",
  "Carlos",
  "Javier",
  "Fernanda",
  "Sofia"
];
const unSoloString = strings.reduce(
  (acc, str) => acc + ", " + str
);
console.log(unSoloString);

// Cuenta cuántas veces aparece cada número en un array (frecuencia).
const numbersTwo = [1, 2, 3, 2, 4, 1, 5, 2, 3, 1, 4, 2];
const frecuenciaNumber = numbersTwo.reduce((acc, number) => {
  acc[number] = (acc[number] || 0) + 1;
  return acc;
}, {});

console.log(frecuenciaNumber);

// Elimina valores repetidos de un array usando reduce.
const uniqueNumbers = numbersTwo.reduce((acc, number) => {
  if (!acc.includes(number)) {
    acc.push(number);
  }
  return acc;
}, []);

console.log(uniqueNumbers);

// Agrupa números pares e impares en un objeto usando reduce.
const grouped = numbers.reduce((acc, number) => {
  if (number % 2 === 0) {
    acc.pares.push(number);
  } else {
    acc.impares.push(number);
  }
  return acc;
}, {
  pares: [],
  impares: []
});

console.log(grouped);

// Seccion Destructuring
const user = {
  id: 10,
  username: "jerly404",
  profile: {
    firstName: "Jerly",
    lastName: "Carvalo",
    age: 21,
    location: {
      country: "Peru",
      city: "Lima"
    }
  },
  skills: ["JavaScript", "TypeScript", "Git"],
  status: "active"
};

// 1. Destructuring anidado
const {
  username,
  profile: {
    lastName,
    location: { city }
  }
} = user;
console.log(username, lastName, city);

// 2. Renombrar variables
const { username: userName, status: accountStatus } = user;
console.log(userName, accountStatus);

// 3. Destructuring de array
const { skills: [firstSkill, secondSkill] } = user;
console.log(firstSkill, secondSkill);

// 4. Extraemos valores por defecto
const { email = 'no-email' } = user;
console.log(email);

