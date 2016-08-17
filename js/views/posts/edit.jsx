"use strict";

import React from 'react';
import { History } from 'react-router';
import update from 'react-addons-update';
import Reflux from 'reflux';
import Quill  from 'quill';
import Moment from 'moment';
import Config from 'appRoot/appConfig';
import Actions from 'appRoot/actions';
import BasicInput from 'appRoot/components/basicInput';
import Loader  from 'appRoot/components/loader';
import Session from 'appRoot/stores/sessionContext';
import { formMixins } from 'appRoot/mixins/utility';


export default React.createClass({
  mixins: [
    Reflux.connect(Session, 'session'),
    History,
    formMixins
  ],

  getInitialState: function () {
  	return { loading: true, validity: {}, post: {} };
  },

  constraints: {
  	title: {
  		required: true,
  		minlength: 5
  	}
  },

  componentWillMount: function () {
    this.editMode   = this.props.params.hasOwnProperty('postId');
    this.createMode = !this.editMode;
    this.postId     = this.editMode ? this.props.params.postId : null;

    this.setState( { loading: this.editMode ? true : false});

    if (this.editMode) {
    	Actions.getPost(this.postId)
    	  .then(function (post) {
    	  	setTimeout(function () {
    	  		//console.log("POST", post);
    	  		this.setState({ post: post, loading: false});
    	  		this.initQuill(post.body);
    	  	}.bind(this), 2000);
    	  }.bind(this))
    	  ['catch'](function (err) {
    	  	  this.setState({ error: err, loading: false});
    	  }.bind(this));
    	  
    }
  },
  
  componentDidMount: function () {
  	var newPostTmpl = '<div>Hello Wrold!</div><div><b>This</b> is my story...</dvi><div><br/></div>';

    !this.editMode && this.initQuill(newPostTmpl);
  },

  initQuill: function (html) {
    if (!this.quill) {
    	this.quill = new Quill(this.refs.editor, {
    		theme: 'snow',
    		modules: {
    			'link-tooltip': true,
    			'image-tooltip': true,
    			'toolbar': {
    				container: this.refs.toolbar
    			}
    		}
    	});
    }
    this.quill.setHTML(html);
  },

  submit: function(e) {
  	POR AQUI VAMOS pag 161.
  }

        
  
  render: function () {
    return (
    	<form className="post-edit">post edit</form>
    );
  }
});