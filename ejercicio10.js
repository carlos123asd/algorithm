/*
indexOf()puede ser increíblemente útil para verificar rápidamente 
la presencia de un elemento en una matriz. Hemos definido una función
quickCheckque toma una matriz y un elemento como argumentos.
Modifique la función usando indexOf()para que regrese truesi
el elemento pasado existe en la matriz y falsesi no.
*/

function quickCheck(arr, elem) {
        if(arr.indexOf(elem) < 0){
            return false;
        }else{
            return true;
        }
}
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));