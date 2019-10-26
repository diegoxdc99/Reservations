## Tabla de contenido

- [Ambientes](#Ambientes).
    - [Crear variables de ambiente](#Crear-variables-de-ambiente).
    - [Generar información](#Generar-información).
- [Ejecución de la aplicación](#Ejecución-de-la-aplicación).
    - [Ejecutar el servidor](#Ejecutar-el-servidor).
    - [Ejecutar el front](#Ejecutar-el-front).
- [Pruebas y covertura](#Pruebas-y-covertura).
    - [Pruebas](#Pruebas).
    - [Covertura](#Covertura).
    - [Formato HTML](#Formato-HTML).

# Ambientes
Para que todo funcione correctamente es necesario tener instalado NodeJS ultima version y angular 9 y ejecutar el siguiente comando en el back y front

`npm install`

## Crear variables de ambiente
Es necesario crear variables de ambiente en el sistema, para esto podemos crear un archivo en el back que se llame .env y configurar las siguientes varaibles

    PORT=3000
    LOG_LEVEL=silly
    DB_URL=string de conexión de mongo

## Generar información
En el back podemos ejecutar el siguiente script de node para crear documentos de vuelos con información falsa y usuarios

`node .\src\scripts\generate-data.js`

# Ejecución de la aplicación

## Ejecutar el servidor
Para ejecutar el servidor debemos tener libre el puerto 3000 y ejecutar el siguiente comando ubicados en el servidor

`npm run dev`

## Ejecutar el front
Para ejecutar el front debemos de tener el servidor iniciado e ir a la carpeta del front y ejecutar el siguiente comando el cuál abrirá automaticamente una pestaña al terminar de generar la aplicación

`ng serve -o`

# Pruebas y covertura
Las pruebas de integración solo están desarrolladas para el back así  que los siguientes comandos solo aplican para el back

## Pruebas
Ejecutar el siguiente comando:

`npm test`

## Covertura
Para conocer la covertura de las pruebas de integración ejecutamos el siguiente comando

`npm run coverage`

## Formato HTML
Para conocer el reporte de covertura en un formato HTML se puede ejecutar el siguiente codigo que generará una carpeta con la pagina web

`npm run coverageHTML`