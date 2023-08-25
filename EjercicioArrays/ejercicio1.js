/*Crea una función que devuelva verdadero si el primer array puede anidarse dentro del segundo y falso en caso contrario.
arr1 puede anidarse dentro de arr2 si:
el mínimo de arr1 es mayor que el mínimo de arr2.
El máximo de arr1 es menor que el máximo de arr2.
Ejemplos
canNest([3, 1], [4, 0]) ➞ true
canNest([9, 9, 8], [8, 9]) ➞ false
*/

const array1 = [1,2,32,45,668];
const array2 = [5,65,457,127,87];
const minA1 = Math.min(...array1);
const minA2 = Math.min(...array2);
const maxA1 = Math.max(...array1);
const maxA2 = Math.max(...array2);

function calcular (){
    if(minA1 > minA2 || maxA1 < maxA2){
        return true
    }else{
        return false
    }
}

calcular();

console.log(prueba);