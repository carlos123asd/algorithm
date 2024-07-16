/*
Hemos definido una función, forecastque toma una matriz como argumento.
Modifique la función usando slice()para extraer información de la matriz 
de argumentos y devolver una nueva matriz que contenga 
los elementos de cadena warmy sunny.
*/

function forecast(arr) {
    arr = arr.slice(2,4);
    return arr;
}
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));