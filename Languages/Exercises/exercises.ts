//1. Array operations
/*Head*/
const head = <T>(array: Array<T>): T =>{
    const [firstItem] = array;
    return firstItem;
}

head(['Hola', 'mi', 'nombre', 'es', 'Vanessa']) /* R/ 'Hola' */


/*Tail*/
const tail = <T>(array: Array<T>): Array<T> => {
    const [, ...restOfArray] = array;
    return restOfArray;
}

tail(['Hola', 'mi', 'nombre', 'es', 'Vanessa']) /* R/ ['mi', 'nombre', 'es', 'Vanessa'] */


/*Init*/
const init = <T>(array: Array<T>): Array<T> => {
    const arraySliced = array.slice(0, -1);
    return arraySliced; 

}

init(['Inicio', 'mitad', 'final']); /* R/ ['Inicio', 'mitad'] */


/*Last*/
const last = <T>(array: Array<T>): T | undefined => {
   return array.at(-1);
}

last([1,2,3,4]); /* R/ 4 */


//2. Concat
const concat = <T>(array1: Array<T>, array2: Array<T>): Array<T> => {
    const arrayConcatenated = array1.concat(array2);
    return arrayConcatenated;
} 

concat([1,2,3], [4,5,6]); /* R/ [1,2,3,4,5,6] */

/**Concat improved*/
const concatII = <T>(...arrays: Array<Array<T>>): Array<T> => {
    return arrays.flat();
}

concatII(['hola'], ['mi', 'cumpleaños', 'es'], ['sept', 26]); /* R/ ['hola', 'mi', 'cumpleaños', 'es', 'sept', 26] */