/**
 * Author.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    names: {
      type : 'string'
    },
    numberJuegos : {
      type : 'number',
      min: 1
    },
    juegos: {
      collection : 'Juego',
      via : 'author_FK'
    }

  },

};

