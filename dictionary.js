'use strict'
const { Dictionary } = require('./Data-Structures')
const dictionary = new Dictionary();
dictionary.set('saludo', 'Accion de decir algo agradable');
dictionary.set('Computadora', 'Dispositivo con el que estoy escribiendo eso');
dictionary.set('Television', 'Algo genial');
console.log(dictionary.keys());
console.log(dictionary.getItems());
console.log(dictionary.get('Computadora'));
console.log(dictionary.size());
dictionary.clear();
console.log(dictionary.size());
