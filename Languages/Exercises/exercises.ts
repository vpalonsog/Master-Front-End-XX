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
