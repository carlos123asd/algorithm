//HackerRank
/*Alice y Bob crearon un problema cada uno para HackerRank. Un revisor califica los dos desafíos y otorga puntos en una escala del 1 al 100 para tres categorías: claridad del problema , originalidad y dificultad .

La calificación para el desafío de Alice es el triplete a = (a[0], a[1], a[2]) , y la calificación para el desafío de Bob es el triplete b = (b[0], b[1], b[2]) .

La tarea es encontrar sus puntos de comparación comparando a[0] con b[0] , a[1] con b[1] y a[2] con b[2] .

Si a[i] > b[i] , entonces Alice recibe 1 punto.
Si a[i] < b[i] , entonces Bob recibe 1 punto.
Si a[i] = b[i] , entonces ninguna persona recibe un punto.
Los puntos de comparación son el total de puntos que una persona ganó.

Dados a y b , determine sus respectivos puntos de comparación.*/

const funcComparacion = (ptsalice,ptsbob) => {
    let alice = 0
    let bob = 0
    for (let index = 0; index < ptsalice.length; index++) {
            if(ptsalice[index] > ptsbob[index]){
                alice++
            }else if(ptsalice[index] < ptsbob[index]){
                bob++
            }
    }
    return `Puntos de Alice: ${alice} | Puntos de Bob: ${bob}`
}

console.log(funcComparacion([2,6,8],[4,9,8]))