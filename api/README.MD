Prueba técnica para el puesto de programador jr FullStack - Fantasticfy
La siguiente prueba técnica tiene como propósito evaluar los conocimientos del desarrollador en el stack tecnológico que se utiliza en Fantasticfy. El desarrollador debe tener en cuenta las siguientes consideraciones:

Deberá hacer uso de las tecnologías indicadas.
Podrá hacer uso de su criterio para implementar las soluciones siempre y cuando el resultado final sea el esperado.
Los estilos de la aplicación web deberán manejarse con CSS puro, sin hacer uso de librerías de estilos.
Requerimiento general
Necesitamos crear una aplicación web que muestre un listado de usuarios y permita agregar nuevos. Actualmente existe un servicio de terceros que provee un listado de usuarios y necesitamos poder sincronizarlos en nuestra propia base de datos, para luego poder persistir los cambios realizados, dando además la opción de poder resincronizarlos sin que esto afecte a los usuarios que se hayan creado y que son ajenos al servicio externo.

Componentes de la prueba
Servidor API REST.
Base de datos no relacional.
Aplicación web.
Servidor API REST
Ecosistema
Servidor: Node Js.
Base de datos: MongoDB (Sugerencia: Mongoose).
API: A elección del desarrollador (Sugerencia: Express).
Requerimiento
Crear un servidor API REST que manejará las siguientes rutas:

POST /sync
Este endpoint debe iniciar una sincronización de usuarios. Consumiendo la siguiente API pública https://jsonplaceholder.typicode.com/users se obtiene un listado de usuarios, estos, deberán ser almacenados en la base de datos siguiendo el esquema indicado al final de la prueba.

El método deberá estar preparado para que, si el usuario no existe en la base de datos lo cree como nuevo, y si ya existe actualice sus datos.

GET /users
Obtener el listado completo de todos los usuarios.

PUT /users
Crea un usuario en la base de datos.

Aplicación web
Ecosistema
ReactJs o Vanilla JS (Sugerencia: NextJs).
Requerimiento
Crear una aplicación web que contenga las siguientes páginas:

Página principal
Deberá mostrar una tabla de usuarios que se obtendrán del servidor API. La tabla deberá contener como mínimo las columnas Nº, Nombre, Correo, Nombre de usuario.

Debe existir un botón que permita navegar a la página para crear un usuario nuevo.

Página para crear un usuario
Deberá mostrar un formulario con los campos minimos necesarios para cumplir con el esquema de usuario y hacer uso del endpoint para crear usuarios del servidor API.

Esquema del usuario
\_id: string - Identificador único interno del usuario
name: string - Nombre del usuario
username: string - Nombre de usuario del usuario
email: string - Correo electrónico del usuario
external_id: string - Identificador único externo del usuario
address: string - Dirección completa del usuario
Adicionales
A continuación presentamos características que no son obligatorias pero que de ser implementadas de forma correcta aumentarán exponencialmente las posibilidades de superar el proceso de selección:

Se valorará el uso de TypeScript
Se valorará el despliegue de las aplicaciones en servicios Cloud (servicios gratuitos)
Recursos
Atlas MongoDB - Para crear una instancia de MongoDB en la nube grátis
