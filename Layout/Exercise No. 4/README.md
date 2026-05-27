# EJERCICIO No. 4 CREACIÓN DE UN ELEMENTO TIPO CARD CON CSS GRID

<p align="justify"> 
El objetivo de éste ejercicio era crear un elemento card en compañía de sus elementos correspondientes como título, descripción del card, fecha de publicación y botón de <em>"Más info"</em> usando CSS GRID.
</p>

## TECNOLOGÍAS UTILIZADAS

El ejercicio está elaborado con CSS, el cual incluye el uso de CSS GRID.

### CARACTERÍSTICAS PRINCIPALES Y SOLUCIÓN AL EJERCICIO

<p align="justify"> 
Lo primero que identiqué para poder trabajar en el ejercicio fue establecer quiénes serían los padres que llevarían la propiedad <em>display:grid</em>. De manera que, para éste caso  las clases <em>.card</em> y <em>.card-content</em> serían los padres. No obstante, en principio la clase <em>.card</em> tendría como hijos a los elementos restantes. Entonces, para poder alinear la descripción de card y la fecha de publicación es necesario establecer <em>display:grid</em> para la clase <em>.card-content</em>. De ésta forma, pude usar la propiedades <em>justify-self, grid-column</em>, dado que sólo aplica para los hijos y así poder ubicar propiamente cada elemento. Como detalle adicional, no consideré necesario usar grid-template-columns dado el tamaño del elemento y cómo se iban a posicionar, conforme a la explicación anterior dada.

</p>


### INSTALACIÓN Y CONFIGURACIÓN

<p align="justify">
Para poder visualizar el Ejercicio es necesario moverse a la carpeta <em>Exercise No. 4</em> y ahí, copiar la ruta sobre <a href="./index.html">index.html</a>, que va a ser visualizada: <em>file:///home/vanessa/Practicing%20projects/Master-Front-End-XX/Layout/Exercise%20No.%204/index.html<em>. 
</p> 

### DEMOSTRACIÓN VISUAL

![alt text](<Card element css grid.png>)
