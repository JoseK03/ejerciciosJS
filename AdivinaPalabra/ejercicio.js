/*
 * Crea un pequeño juego que consista en adivinar palabras en un número máximo de intentos:
 * - El juego comienza proponiendo una palabra aleatoria incompleta
 *   - Por ejemplo "m_ur_d_v", y el número de intentos que le quedan
 * - El usuario puede introducir únicamente una letra o una palabra (de la misma longitud que
 *   la palabra a adivinar)
 *   - Si escribe una letra y acierta, se muestra esa letra en la palabra. Si falla, se resta
 *     uno al número de intentos
 *   - Si escribe una resolución y acierta, finaliza el juego, en caso contrario, se resta uno
 *     al número de intentos
 *   - Si el contador de intentos llega a 0, el jugador pierde
 * - La palabra debe ocultar de forma aleatoria letras, y nunca puede comenzar
 *   ocultando más del 60%
 * - Puedes utilizar las palabras que quieras y el número de intentos que consideres
 */


const palabras = ["murcielago", "manzana", "computadora", "elefante", "guitarra"];
const maxIntentos = 6;

function elegirPalabraAleatoria() {
  return palabras[Math.floor(Math.random() * palabras.length)];
}

function ocultarLetras(palabra) {
  const letrasOcultas = Math.floor(palabra.length * 0.6);
  const palabraOculta = palabra.split('').map((letra, index) => {
    if (index < letrasOcultas) {
      return "_";
    }
    return letra;
  }).join('');

  return palabraOculta;
}

function jugar() {
  const palabraSecreta = elegirPalabraAleatoria();
  let palabraAdivinada = ocultarLetras(palabraSecreta);
  let intentos = maxIntentos;

  while (intentos > 0 && palabraAdivinada !== palabraSecreta) {
    const input = prompt(`Adivina la palabra: ${palabraAdivinada}\nIntentos restantes: ${intentos}`);
    
    if (input.length === 1) {
      if (palabraSecreta.includes(input)) {
        palabraAdivinada = palabraSecreta.split('').map((letra, index) => {
          if (letra === input) {
            return input;
          }
          return palabraAdivinada[index];
        }).join('');
      } else {
        intentos--;
      }
    } else if (input === palabraSecreta) {
      palabraAdivinada = palabraSecreta;
    } else {
      intentos--;
    }
  }

  if (palabraAdivinada === palabraSecreta) {
    console.log(`¡Felicidades! Adivinaste la palabra: ${palabraSecreta}`);
  } else {
    console.log(`Perdiste. La palabra correcta era: ${palabraSecreta}`);
  }
}

jugar();
