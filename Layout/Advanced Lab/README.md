# LABORATORIO EXTRA

<p align="justify">
El objetivo de éste ejercicio era replicar la Home page de Warner proporcionada, la cual contiene <em>un header, sections (cada uno con su respectivo título)</em> y teniendo presente lo anterior, ordenar la estructura acorde a las visuales y sus elementos teniendo en cuenta el diseño responsivo, acompañado de animaciones.
</p>

## TECNOLOGÍAS UTILIZADAS

El ejercicio está elaborado con vite+postcss. Así mismo, usé puglins de postcss necesarios para desarrollar el ejercicio.

### CARACTERÍSTICAS PRINCIPALES Y SOLUCIÓN AL EJERCICIO

<p align="justify"> 

Para dar solución al ejercicio decidí aplicar flexbox y grid. Para el <em>header</em>, apliqué flexbox para poder distribuir los elementos hijos como los botones, así como el logo y su título de cabecera. Para el <em>main</em>, igualmente usé flexbox. Sin embargo, para el diseño responsivo de sus siguientes resoluciones de pantalla apliqué grid. Considero que, era más sencillo ubicar aquellos elementos que en ciertas pantallas se visualizaban en 4 columnas y otros en 3, así mismo los elementos que se iban ubicando debajo de éstos. Como un extra, decidí agregar el <em>footer</em> para dar estructura al diseño.

Para calcular el número de <em>Los más populares</em>, decidí añadir en el archivo <a href="./index.html">index.html<a> dos etiquetas <em>span<em> con sus respectivos números y en el archivo de estilos <a href="./src/css/layout/container.css">container.css</a> usé la propiedad <em>display</em> sea para mostrar uno o esconder el otro, dependiento del tamaño de la pantalla.

### INFORMACIÓN EXTRA: ORGANIZACIÓN DE CARPETAS

Dado la clase de postcss decidí guiarme por ésa organización establecida.De manera que quedó ordenada de la siguiente manera:

```text
'Advanced Lab'/
├── src/
|   ├── assets/
│   ├── css/
│   │   ├── base/
│   │   │   ├── media.css
│   │   │   └── variables.css
│   │   ├── layout/
│   │   │   ├── header.css
│   │   │   ├── container.css
│   │   │   └── footer.css
│   │   ├── vendors/
│   │   │   └── reset.css
│   │   └── main.css
├── index.html
├── README.md
└── images/
```
### INSTALACIÓN Y CONFIGURACIÓN

<p align="justify">
Para poder visualizar el Ejercicio es necesario ejecutar el comando <em>"git clone git@github.com:vpalonsog/Master-Front-End-XX.git"</em>.Debes moverte a la carpeta <em>Layout</em>.Luego, moverse a la carpeta <em>"Advanced Lab"</em> y ahí, ejecutar los comandos <em>"npm i/npm install"<em> y <em>"npm run dev"</em>.
</p> 

### DEMOSTRACIÓN VISUAL