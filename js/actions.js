import Reflux from 'reflux';


// Define los métodos que son inmediatos y los que son asincronos
// Los asincronos proveen una interfaz con una promesa si se usa reflux-promise

// Cada accion es un objeto funcion (functor) que puede ser llamado para disparar los listeners
export default Reflux.createActions({
  'getPost' : {
  	aysncResult : true
  },
  'modifyPost' : {
  	aysncResult : true
  },
  'login' : {
  	aysncResult : true
  },
  'logOut' : {},
  'createUser' : {
  	aysncResult : true
  },
  'editUser' : {
  	aysncResult : true
  },
  'search' : {},
  'getSessionContext': {}
});