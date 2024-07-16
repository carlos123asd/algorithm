/*
Hemos definido una función, filteredArrayque toma arruna matriz anidada
y elemcomo argumentos, y devuelve una nueva matriz.
elem representa un elemento que puede estar presente o no en una o más
de las matrices anidadas dentro de arr. Modifique la función,
utilizando un forbucle, para devolver una versión filtrada de la matriz
pasada de modo que se elimine cualquier matriz anidada
dentro arrdel contenedor .elem
*/
//Iterate Through All an Array's Items Using For Loops
function filteredArray(arr, elem) {
    let newArr = [];
    let aux = 0;
    let rep = false;
    arr.forEach(element => {
      element.forEach(subelement => {
          aux++;
          if(subelement != elem && rep === false){
            if(element.length === aux){
                newArr.push(element);
            }
          }else{
            rep = true;
          }
          if(element.length === aux){
            aux = 0;
            rep = false;
          }
      })
    });
    return newArr;
  }
  
  console.log(filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2));