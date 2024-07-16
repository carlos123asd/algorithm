//HackerRank
/*
Dados cinco números enteros positivos, encuentre los valores mínimo y máximo que se pueden calcular sumando exactamente cuatro de los cinco números enteros.
Luego imprima los valores mínimo y máximo respectivos como una sola línea de dos números enteros largos separados por espacios.
*/

const sumMaxMin = (array) => {
    const max = Math.max(...array)
    const min = Math.min(...array)
    let resultado = 0
    for(let i = 0; i < array.length; i++){
        if(array[i] !== max && array[i] !== min){
            resultado += array[i]
        }
    }
    return `Suma maxima: ${resultado+max} | Suma minima: ${resultado+min}`
}

console.log(sumMaxMin([1,3,5,7,9]));