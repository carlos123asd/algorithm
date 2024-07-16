//HackerRank
/*
Dada una matriz cuadrada, calcule la diferencia absoluta entre las sumas de sus diagonales.

Por ejemplo, la matriz cuadradase muestra a continuación:

1 2 3
4 5 6
9 8 9 

*/

const funSumDiagonalMatrix = (matriz) => {
    let primerDiagonal = 0
    let segundoDiagonal = 0
    let aux = matriz.length
    for (let index = 0; index < matriz.length; index++) {
        primerDiagonal += matriz[index][index] 
    }
    for (let i = 0; i < matriz.length; i++) {
        aux--
        segundoDiagonal += matriz[i][aux] 
    }
    return primerDiagonal + segundoDiagonal
}

console.log(funSumDiagonalMatrix([[1,2,3],[4,5,6],[9,8,9]]))