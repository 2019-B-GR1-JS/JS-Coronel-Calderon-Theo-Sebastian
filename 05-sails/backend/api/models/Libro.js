/**
 * Libro.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

//sails generate api Libro
module.exports = {

  attributes: {
    nombre: {
      type: 'string'
    },
    isbn: {
      type: 'string'
    },
    idUsuario: {
      model: 'usuario',    //Nombre del modelo padre
      required: true
    }
  },

};

