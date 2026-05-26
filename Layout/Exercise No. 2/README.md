# EJERCICIO No. 2 DOS TEMAS DISTINTOS SOBRE PROPIEDADES DE ELEMENTOS

<p align="justify"> 
El objetivo de éste ejercio era asignar dos estilos diferentes en el color, la fuente, border radius y box shadow sobre las características de los elementos de una página web e importar un estilo u otro en el fichero de estilos principal. 
</p>

## TECNOLOGÍAS UTILIZADAS

El ejercicio está elaborado con CSS puro.

### CARACTERÍSTICAS PRINCIPALES Y SOLUCIÓN AL EJERCICIO

<p align="justify"> 
Para realizar éste ejercicio lo primero que hice fue visualizar cuáles eran las características que afectaban cada uno de los temas y cuáles tenían en común. Entonces, primero cree dos archivos <a href="./styles/styles-I.css">styles-I</a> y <a href="./styles/styles-II.css">styles-II</a> dentro de la carpeta <a href="./styles/">styles</a>. Ahí agregué los colores, la sombra, el border radius y la posición del elemento del tema (A, B). Una vez tenía estos elementos en <em>:root</em>, agregué en cada archivo sus propiedades con las respectivas clases de acuerdo al maquetado de <a href="./index.html">index.html</a> e iba probando cada uno por separado. Teniendo todo listo en cada archivo, sólo dejé las variables diferenciadoras y creé un archivo <a href="./styles/common.css">common.css</a> donde pegué todos los estilos relevantes con sus variables globales diferenciadoras. Finalmente, agregué el archivo <a href="./styles/main.css">main.css</a> donde importé <em>styles-I.css</em> y agregué una línea comentada con el otro estilo a importar para poder alternarlo.
</p>




### INSTALACIÓN Y CONFIGURACIÓN

<p align="justify">
Para poder visualizar el Ejercicio es necesario moverse a la carpeta <em>Exercise No. 2</em> y ahí, copiar la ruta sobre <em>index.html</em>, que va a ser visualizada: <em>file:///home/vanessa/Practicing%20projects/Master-Front-End-XX/Layout/Exercise%20No.%202/index.html<em>. Para poder visualizar <em>styles-II.css</em>, pegue la importación del estilo comentada en el archivo <a href="./styles/main.css">main.css</a> 
</p> 

### DEMOSTRACIÓN VISUAL

![alt text](<Theme A-1.png>)

![alt text](<Theme B-1.png>)