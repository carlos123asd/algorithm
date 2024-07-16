/*
Hemos definido una función copyMachineque toma arr(una matriz) y
num(un número) como argumentos. Se supone que la función devuelve 
una nueva matriz formada por numcopias de arr. Hemos hecho la mayor parte
del trabajo por usted, pero aún no funciona del todo bien.
Modifique la función usando la sintaxis extendida
para que funcione correctamente (pista: ¡otro método que ya hemos cubierto
podría resultar útil aquí!).
*/
function copyMachine(arr, num) {
    let newArr = [arr];
    while (num >= 1) {
      newArr.push(arr);
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));