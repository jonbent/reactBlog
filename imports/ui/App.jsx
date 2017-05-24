import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { createContainer } from 'meteor/react-meteor-data';
import { List } from 'material-ui/List'
import Divider from 'material-ui/Divider'


import { Link } from 'react-router';
import { PropTypes } from 'prop-types';

// database - collection
import { Posts } from '../api/posts'

import Blog from './Blog'
import Post from './Post'
import NewPost from './NewPost';
import AccountsWrapper from './AccountsWrapper'
import EditPost from './EditPost'
const tempPost = {
  title: 'Welcome to my reactBlog',
  description: 'I am still currently making this app, it should be done with about 7 days of work. Thanks for looking at my blog!!',
  createdAt: new Date(),
}

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentPost: tempPost,
      showEditPost: false,
      ownerId: 'DEg45aZgFX9Aok9Tf',
    }

    this.updateCurrentPost = this.updateCurrentPost.bind(this);
    this.showEditForm = this.showEditForm.bind(this);
    this.showBlog = this.showBlog.bind(this);

  }

  renderPosts(){
    return this.props.posts.map((post) => (
      <Blog key={post._id} post={post} updateCurrentPost={this.updateCurrentPost} />

    ))
  }

  updateCurrentPost(post){
    this.setState({
      currentPost: post,
    })
  }

  showEditForm() {
    this.setState({
      showEditPost: true
    })
  }

  showBlog() {
    this.setState({
      showEditPost: false
    })
  }

  showForm(){
    if(this.state.showEditPost === true){
      return ( <EditPost currentPost={this.state.currentPost}
      showBlog={this.showBlog}/>);
    } else {
      return (
      <List>
        {this.renderPosts()}
      </List> );
    }

  }

  render(){

    return(
      <MuiThemeProvider>
        <div className='row'>
          <div className='col s12'>
            <Post post={this.state.currentPost} showEditForm={this.showEditForm}/>
          </div>
          <div className='col s2 right'>
            {this.state.ownerId === Meteor.userId() &&
              <a href='/new'>new post</a>
            }
            <AccountsWrapper />
          </div>
          <div className='col s10 left'>
            {this.showForm()}
          </div>
        </div>

      </MuiThemeProvider>
    )
  }
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
}

export default PostContainer = createContainer(() => {
  Meteor.subscribe("posts");
  const user = Meteor.userId();
  return{
    posts: Posts.find({}, {sort: {createdAt: -1}}).fetch()
  }
}, App)
