# Arron Final Frontend
> Aplicación web

Aplicación web desarrollada utilizando principalmente React y Redux, además de distintas librerias que facilitaron el desarrollo o las visuales del aplicativo.

## Instalación y uso

Para descargar los paquetes necesarios del aplicativo: 

```sh
npm install
```

Inicialización:

```sh
npm start
```

## Pantallas

* Home
    * Pantalla inicial del aplicativo sin mucha información y obteniendo los primeros 3 productos generados en la base de datos
    para mostrarlos en cards.
    * No requiere estar logueado.

* Login
    * Pantalla que permite a los usuarios iniciar sesión dentro del aplicativo y tener acceso a distintas pantallas.
    * No requiere estar logueado.
    * Será redireccionado en caso de estar logueado.

* Products
    * Pantalla que permite a los usuarios obtener un listado de los productos creados, dando la posibilidad de eliminarlos y
    redireccionar al formulario de creación o edición de productos.
    * Requiere estar logueado.
    * Será redireccionado en caso de no estar logueado.

* ProductsForm
    * Pantalla que permite a los usuarios crear o editar productos existentes. 
    * Contiene verificaciones y manejo de errores por casilla.
    * Requiere estar logueado.
    * Será redireccionado en caso de no estar logueado.

## Repositorio

https://github.com/fedeargfyron/MCGA-Final-Frontend

## Produccion

https://mcga-final-frontend.vercel.app

## Tecnologias

* JavaScript
* ES6
* React Js
* Redux - React Redux - Redux thunk
* React Hook Form
* Fonts awesome
* Material UI