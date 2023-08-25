/* Escribe un programa que muestre por consola los numeros del 1 al 100
    sustituyendo los siguientes:
    -Multiplos de 3 => por la palabra 'fizz'
    -Multiplos de 5 => por la palabra 'Buzz'
    -Multiplos de 3 y 5 => por la palabra 'frizzBuzz' */

for (let i = 1; i < 101; i++) {
    if(i % 3 == 0 && i%5 == 0){
        console.log('FizzBuzz')
    }else if(i%5 == 0){ 
        console.log('Buzz')
    }else if(i % 3 == 0){
        console.log('Fizz') 
    }else{
        console.log(i)
    }
}