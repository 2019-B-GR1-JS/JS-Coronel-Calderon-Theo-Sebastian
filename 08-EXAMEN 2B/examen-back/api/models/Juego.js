/**
 * Juego.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name : {
      type : 'string'
    },
    edition: {
      type : 'number',
      min : 1
    },
    precio: {
      type : 'number',
      min : 1
    },
    estilo : {
      type : 'string'
    },
    author_FK : {
      model : 'Author'
    }

  },

};

