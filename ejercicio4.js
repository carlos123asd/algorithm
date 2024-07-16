/*
Hemos definido una función, popShiftque toma una matriz como argumento 
y devuelve una nueva matriz. Modifique la función, usando pop()y shift(),
 para eliminar el primer y último elemento de la matriz de argumentos,
  y asigne los elementos eliminados a sus variables correspondientes,
   de modo que la matriz devuelta contenga sus valores.
*/

function popShift(arr) {
    let popped = arr.pop();
    let shifted = arr.shift();
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));