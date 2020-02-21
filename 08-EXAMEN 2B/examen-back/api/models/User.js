/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    userName : {
      type : 'string',
      required : true,
      unique : true
    },
    rol : {
      type : 'string',
      required : true
    },
    email : {
      type : 'string',
      required : true,
      unique : true
    },
    password : {
      type : 'string',
      required : true
    }

  },

};

