# Ejemplos de CPS en Node.js

## Antes de empezar

Instalá un entorno Node como se [explica acá](http://arquitecturas-concurrentes.github.io/guias/node/). La parte de Express la podés obviar. 

## Vistazo rápido de los ejemplos

### Primer CPS

El primer CPS que vamos a hacer es muy fácil, por eso no figura en este repo. 

```javascript
function suma(x, y, cont) {
  cont(x + y);
}
```

### Factorial CPS

Un ejemplo fácil de una función recursiva, escrita en CPS. 

### Patrones de comunicacion implementados con CPS

Para demostrar el poder de CPS, algunos ejemplos de otros patrones de comunicación implemetnados mediante éste:
 * No determinsmo: Cómo parecerse a Prolog, o cómo usar listas sin tener listas. 
 * Falla: Como implementar compuaciones que pueden no tener resultado. Más adelante veremos es que este es el comportamiento de Maybe, ¡pero sin modelarlo!
 * Excepciones: Cómo puedo modelar excepciones en un lenguaje que no las tiene. O cómo hacerlas más flexibles que las que vienen con JavaScrit. 

### Cuentas sincrónicas

Un ejemplo que funciona de como modelar Cuentas y Transferencias en estilo directo. Nada loco que no puedas hacer sabiendo de objetos en JS, pero es la base del ejempo siguiente

#### Cuentas asincrónicas rotas

El ejemplo anterior, convertido en CPS. Y cómo con unos mínimos cambios y la magia del setTimeot podemos romper absolutamente todo y ver que en JS también hay condiciones de carrera. 

Ah, pero todo tiene solución. Por suerte existen las excepciones ....¿no?
