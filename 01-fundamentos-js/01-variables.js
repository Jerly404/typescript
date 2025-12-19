/**
 * Variables en JavaScript
 *
 * Existen 3 formas de declarar variables:
 *  - var (no usar)
 *  - let
 *  - const (preferida)
 *
**/

/**
 * var
 * Problemas:
 *   - Scope
 *   - Puede generar bugs difíciles de detectar
**/

var name = "Jerly404";
name = "Josue";

/**
 * let
 * Se usa cuando el valor de VA A CAMBIAR
**/
let age = 20;
age = 21;

/**
 * const
 * Se usa cuando el valor NO VA A CAMBIAR
 **/
const country = "Perú";

/**
 * Regla mental:
 * Si el valor no cambia -> const
 * Si el valor cambia -> let
 **/

/**====================================
 *          Ejercicios
====================================**/

// 1. Declara una variable con tu nombre usando const
const myFirstName = "Himer";

// 2. Declara una variable con tu edad usando let y luego cambia su valor.
let myAge = 21;
myAge = 20;

// 3. Explica con tus palabras por qué no se recomienda usar var.
// No se recomienda usar var porque no respeta el scope de bloque,
// puede redeclararse sin error y genera errores difíciles de detectar.
