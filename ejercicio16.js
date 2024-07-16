//HackerRank
/*En este desafío, se requiere calcular e imprimir la suma de los elementos de una matriz, teniendo en cuenta que algunos de esos números enteros pueden ser bastante grandes.

Función descriptiva

Complete la función aVeryBigSum en el editor que aparece a continuación. Debe devolver la suma de todos los elementos de la matriz.*/

const sumBigNums = (bigNums) => {
    let sum = 0
    for (let index = 0; index < bigNums.length; index++) {
        sum += bigNums[index];
    }
    return sum
}

console.log(sumBigNums([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]))