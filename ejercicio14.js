//HackerRank
/*Complete la función simpleArraySum en el editor que aparece a continuación. Debe devolver la suma de los elementos de la matriz como un entero.*/
const simpleArraySum = (array) => {
    let sum = 0
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
    }
    return sum
}   

console.log(simpleArraySum([1,10,23,53]))