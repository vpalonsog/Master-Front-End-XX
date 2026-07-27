/*Head*/
const head = <T>(array: Array<T>): T =>{
    const [firstItem] = array;
    return firstItem;
}


head(['Hola', 'mi', 'nombre', 'es', 'Vanessa']) /* R/ 'Hola' */


