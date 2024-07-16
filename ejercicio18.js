//HackerRank
/*
ado un conjunto de números enteros, calcule las razones de sus elementos que son positivos , negativos y cero . 
Imprima el valor decimal de cada fracción en una nueva línea conlugares después del decimal.
*/

const valorDecimal = (array) => {
    let positivos = 0
    let negativos = 0
    let ceros = 0
    for (let index = 0; index < array.length; index++) {
        if(Math.sign(array[index]) === -1){
            negativos++
        }else if(Math.sign(array[index]) === 1){
            positivos++
        }else if(Math.sign(array[index]) === 0){
            ceros++
        }else if(Math.sign(array[index]) === -0){
            negativos++
        }
    }
    return `Positivo: ${positivos/array.length} Negativo: ${negativos/array.length} Ceros: ${ceros/array.length}`
}

console.log(valorDecimal([-4, 3, -9, 0, 4, 1]))