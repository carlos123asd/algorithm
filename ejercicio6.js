/*
Hemos definido una función, htmlColorNamesque toma una matriz de colores HTML
como argumento. Modifique la función usando splice()para eliminar 
los dos primeros elementos de la matriz y agregue 
'DarkSalmon'y 'BlanchedAlmond'en sus respectivos lugares.
*/

function htmlColorNames(arr) {
    arr.splice(0,2);
    arr.unshift('DarkSalmon', 'BlanchedAlmond');
    return arr;
  }
  
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));