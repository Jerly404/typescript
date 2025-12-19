/**
 * MANEJO DE ERRORES
 */

try {
  throw new Error("Algo salió mal");
} catch (error) {
  console.error(error.message);
} finally {
  console.log("Proceso finalizado");
}

/* =======================
   EJERCICIOS
======================= */

/**
 * 1. Crea un error personalizado.
 * 2. Captura el error y muestra el mensaje.
 * 3. ¿Por qué es importante manejar errores?
 */

// 1. Error personalizado
try {
  const user = "guest";

  if (user !== "admin") {
    throw new Error("Acceso denegado: no eres administrador");
  }

  console.log("Puede ingresar");
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("Proceso finalizado");
}

// 3.
// Es importante manejar errores porque evita que la aplicación se caiga,
// permite mostrar mensajes claros y facilita la depuración.
