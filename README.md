# FinancialIndicators

Este proyecto es una aplicación Angular para visualizar indicadores financieros utilizando una API externa.

## Requisitos previos

- Node.js (versión 14 o superior)
- Angular CLI (versión 12 o superior)

## Instalación

1. Clonar este repositorio en tu máquina local:
```bash
    git clone <url-del-repositorio>
    cd financial-indicators 
    

2.	Instala las dependencias del proyecto:
```bash
    npm install

3.  Iniciar Aplicación

  ```bash
       ng serve

## Configuración de pruebas unitarias

Karma es el test runner utilizado para lanzar las pruebas en un navegador. La configuración de Karma está en el archivo karma.conf.js. Asegúrate de que está correctamente configurado para tu entorno.


#### Configuración de TypeScript para pruebas

El archivo tsconfig.spec.json está configurado para incluir solo los archivos de prueba (*.spec.ts) y sus archivos de declaración (*.d.ts). Asegúrate de que el contenido de tsconfig.spec.json sea el siguiente:

```sh {"id":"01J22CS7Q6CKF72572BSN6T2JN"}
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": [
      "jasmine",
      "node"
    ]
  },
  "include": [
    "src/**/*.spec.ts",
    "src/**/*.d.ts"
  ]
}
```

#### Ejecutar las pruebas

```bash
    ng test
