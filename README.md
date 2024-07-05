# FinancialIndicators

Este proyecto es una aplicación Angular para visualizar indicadores financieros utilizando una API externa.

## Requisitos previos

- Node.js (versión 14 o superior)
- Angular CLI (versión 12 o superior)

## Instalación

1. Clonar este repositorio en tu máquina local:
  git clone <https://github.com/Sergiobasstidas/indicadores-financieros>
  cd financial-indicators 
    

2.	Instala las dependencias del proyecto:
    npm install

3.  Iniciar Aplicación
    ng serve

## Configuración de pruebas unitarias

Karma es el test runner utilizado para lanzar las pruebas en un navegador. La configuración de Karma está en el archivo karma.conf.js. Asegúrate de que está correctamente configurado para tu entorno.


#### Configuración de TypeScript para pruebas

El archivo tsconfig.spec.json está configurado para incluir solo los archivos de prueba (*.spec.ts) y sus archivos de declaración (*.d.ts). Asegúrate de que el contenido de tsconfig.spec.json sea el siguiente:
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

#### Ejecutar las pruebas
   ng test
