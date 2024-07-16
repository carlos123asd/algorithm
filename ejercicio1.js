/*
Hemos definido una variable llamada yourArray. 
Complete la declaración asignando una matriz de al menos 5 elementos de longitud a la yourArrayvariable.
 Su matriz debe contener al menos una cadena , un número y un booleano.
*/
const yourArray = ['Hola',true,1,'Adios',0];
yourArray.forEach((item) => {
    console.log(typeof item);
});