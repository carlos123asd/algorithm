/*
Hemos inicializado una matriz arr. Úselo splice()para eliminar elementos 
de arr, de modo que solo contenga elementos que sumen el valor de 10.
*/

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.shift();
arr.splice(3,8);
console.log(arr);