/*
Hemos definido una función, mixedNumbersa la que le pasamos una matriz 
como argumento. Modifique la función usando push()y unshift()
para agregar 'I', 2, 'three'al principio de la matriz y 7, 'VIII',
 9al final para que la matriz devuelta contenga 
 representaciones de los números del 1 al 9 en orden.
*/

function mixedNumbers(arr) {
    arr.unshift('I',2,'three');
    arr.push(7,'VIII',9);
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));