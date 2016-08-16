"use strict";

import Reflux from 'reflux';


// Define los métodos que son inmediatos y los que son asincronos
// Los asincronos proveen una interfaz con una promesa si se usa reflux-promise

// Cada accion es un objeto funcion (functor) que puede ser llamado para disparar los listeners
export default Reflux.createActions({
  'getPost' : {
  	asyncResult : true
  },
  'modifyPost' : {
  	asyncResult : true
  },
  'login' : {
  	asyncResult : true
  },
  'logOut' : {},
  'createUser' : {
  	asyncResult : true
  },
  'editUser' : {
  	asyncResult : true
  },
  'search' : {},
  'getSessionContext': {}
});