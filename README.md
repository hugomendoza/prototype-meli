# API Meli Service - Prueba de Consumo de API

## Links de Consulta

## Repositorio
https://github.com/hugomendoza/prototype-meli

### Endpoints
https://api-meli-hugo.herokuapp.com/api/items?q=:query

https://api-meli-hugo.herokuapp.com/api/items/:id

La primera vez puede tardar la consulta porque Heroku desactiva el servicio después de 30 minutos de inactividad.

### Cliente para consumo de API
https://client-meli.vercel.app/

## Tecnologías Usadas

## API

NodeJS: https://nodejs.org/es/

Nodemon: https://nodemon.io/

Node-fetch: https://www.npmjs.com/package/node-fetch

Express: https://expressjs.com/es/

Para inicializar el proyecto:
~~~
cd api-meli
~~~
~~~
npm install
~~~
~~~
npm run dev
~~~
~~~
npm run start
~~~

## Cliente

React https://es.reactjs.org/

Vite https://vitejs.dev/

TypeScript https://www.typescriptlang.org/

React Router DOM: https://reactrouter.com/en/v6.3.0

Query String: https://www.npmjs.com/package/query-string

React Icons: https://react-icons.github.io/react-icons/

SASS: https://sass-lang.com/

Para inicializar el proyecto:
~~~
cd search-meli
~~~
~~~
npm install
~~~
~~~
npm run dev
~~~
~~~
npm run start
~~~

## Consideraciones

- Se conserva el `.env` en el control de versiones ya que no hay datos sensibles. La API es pública y no se usa API keys personales.

## Backlog

- El proyecto se puede actualizar como monorepo utilizando [NX]( https://nx.dev/) o alguna otra opción.
- Mejorar el tipeado de la data para reducir el uso `any`.
- Agregar animaciones para mejorar la interfaz del cliente.
- Refactorizar algunas funciones para reducir el de condicionales `if - else`.
- Agregar custom Hooks.