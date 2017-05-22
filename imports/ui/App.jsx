import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { createContainer } from 'meteor/react-meteor-data';

import { Link } from 'react-router';
import { PropTypes } from 'prop-types';

// database - collection
import { Posts } from '../api/posts'

import Post from './Post'
import Blog from './Blog';
import NewPost from './NewPost';


class App extends Component {

  renderPosts(){
    return this.props.posts.map((post) => (
      <Post key={post._id} post={post}/>
    ))
  }


  render(){
    console.log(Posts.find().fetch());

    return(
      <MuiThemeProvider>
        <div className='row'>
          <div className='col s12'>
            {this.renderPosts()}
          </div>
          <p>foo</p>
        </div>

      </MuiThemeProvider>
    )
  }
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
}

export default Blog = createContainer(() => {
  Meteor.subscribe("posts");

  return{
    posts: Posts.find().fetch()
  }
}, App)
