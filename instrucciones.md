# ¿ Hace un cine ?

![](https://imgur.com/nPVcCjj.jpg)

## Objetivo

- Crear un servicio Angular para compartir información con todos los componentes de tu aplicación.
- Crear rutas de Angular con parámetros.
- Crear componentes conectados entre si.

## Requisitos

- [Fork del repositorio](https://guides.github.com/activities/forking/)
- Clona **tu** repositorio en tu directorio local.

## Entrega

Después de completar ejercicio ejecuta las siguientes instrucciones:

```bash
$ git add .
$ git commit -m "completado"
$ git push origin master
```

Desde **tu** repositorio crea un `pull request` al repositorio original.

En el campo name añade tu nombre [+ el de la pareja].

## Introducción

Corren malos tiempos para las salas de cine. La competencia de internet está dañando la industria, la gente se descarga películas sin pagar por ello. Una sala de proyección ha contactado con nosotros para ayudarles a cambiar la visión que tiene la gente sobre el cine.

La idea es rehacer su sitio web usando Angular. Piensan que si usan las últimas tecnologías la gente los verá de otro modo.

El cine tiene 5 salas diferentes, donde podrás ver 5 películas. La propuesta del cine es proyectar las películas favoritas de la gente en lugar de los últimos estrenos. Tu tarea será ayudar a decir que películas programar.


### Iteración 1 | Creación del Servicio

Primero, crearemos un servicio Angular que contendrá toda la información de películas.

El servicio servirá las películas:

#### Movies

`movies` será un array de objetos que contendrá un ítem por cada sala del cine. Cada objeto tendra la siguiente información:

- **`id`** (Number) - Identificador único para distinguir las películas.
- **`title`** (String) - título.
- **`poster`** (String) - URL de un póster.
- **`synopsis`** (String) - Descripción breve.
- **`genres`** (Array of strings) - Géneros de la película: "Adventure", "Action", "Romantic Comedy" etc.
- **`year`** (Number) - Año de estreno.
- **`director`** (String) - Director.
- **`actors`** (Array of strings) - Nombre de los actores principales.
- **`hours`** (Array of strings) - Horario de proyección. ejemplo: `Wednesday 19:30, 22:30` Indica que se puede ver la película los miércoles a las  19:30h y a las 22:30h.
- **`room`** (Number) - Número de la sala valor entre 1 y 5.

Para crear el array puedes partir del fichero de muestra (sample-movies.js) y completar la información que falta. 

#### Métodos

En el servicio se implementarán dos métodos que se usarán después. Los métodos son:

- **`getMovies()`** - Devuelve un array de todas las películas.
- **`getMovie(id)`** - Recibe un id de película como parámetro y devuelve el objeto correspondiente.

### Iteración 2 | Rutas

En la segunda iteración del ejercicio, crea dos rutas diferentes.

En la página principal de la aplicación mostraremos un lista de películas. Cuando se clique sobre una película se irá al detalle correspondiente.

1. Crea dos componentes para mostrar la información: `MyHomeComponent` y `MyMovieComponent`.

2. Crea las rutas:
   - `/home`, that will render the `MyHomeComponent` component.
   - `/movie/:id`, that will render the `MyMovieComponent` component.


### Iteration 3 | Home Page

En `MyHomeComponent` carga todas las películas usando el service  `Cinema` y añade un vínculo al detalle de cada película.

Recuerda que estamos tratando de revolucionar el mundo del cine y convertir a todos los milenials. Añade un estilismo impactante a la página.

![](https://imgur.com/ho1XP03.png)

### Iteración 4 | Movie Page

Mostraremos ahora los detalles de cada película. Utilizaremos el service `Cinema` apra cargar toda la información de una película. En esta página desplegaremos todos los detalles además de un botón para volver atrás.
Dale tu toque personal a la página.

![](https://imgur.com/kTenY67.png)

