import React from 'react';
import { History } from 'react-router';

export default React.createClass({
  mixins: [History],
  logIn: function(e)  {
  	this.history.pushState('','/');
  },
  render: function () {
    return (
    	<form className="login-form">login form</form>
    );
  }
});