// Inferencia (TS adivida que es un string)
let name = 'Jerly';

// Tipado Explícito (Tú tienes el control total)
let age: number = 23;
let isStudent: boolean = true;

function greet(person: string) {
  return "Hello " + person;
}

console.log(greet(name));

