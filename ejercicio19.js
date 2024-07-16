//HackerRank
/*Su base y altura son ambas iguales aSe dibuja utilizando #símbolos y espacios. La última línea no está precedida por ningún espacio.

Escriba un programa que imprima una escalera de tamaño. */
let aux = ''
let space = ''
const escaler = (n) => {
    let i = 0
    for (let index = 0; index < n; index++) {
        aux += '#'
        for(i = n - index; i > 0; i--){
            space += ' '
        }
        console.log(space+aux)
        space = ''
    }
}
escaler(9)