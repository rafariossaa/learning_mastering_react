import Reflux from 'reflux';


// Define los métodos que son inmediatos y los que son asincronos
export default Reflux.crateActions({
  'getPost' : {
  	aysncResult : true
  },
  'modifyPost' : {
  	aysncResult : true
  },
  'login' : {
  	aysncResult : true
  },
  'logOut' : {
  	aysncResult : true
  },
  'editUser' : {
  	aysncResult : true
  },
  'search' : {}
  'getSessionContext': {}
});