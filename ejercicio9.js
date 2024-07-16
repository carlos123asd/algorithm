/*
Hemos definido una función spreadOutque devuelve la variable
sentence. Modifique la función usando el operador de extensión para 
que devuelva la matriz ['learning', 'to', 'code', 'is', 'fun'].
*/

function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun'];
    return sentence;
  }
  
  console.log(spreadOut());