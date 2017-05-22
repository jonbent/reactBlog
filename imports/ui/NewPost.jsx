import React, {Component} from 'react';
import { browserRouter as Router } from 'react-router-dom';
import { Posts } from '../api/posts';

export default class NewPost extends Component {

  submitPost(e) {
    e.preventDefault();
    Posts.insert({
      title: this.refs.title.value,
      description: this.refs.description.value,
      createdAt: new Date()
    });

    console.log("post added");
    this.props.history.push('/');
  }

  render() {
    return(
      <div className='row'>
        <form className='col s12' onSubmit={this.submitPost.bind(this)}>
          <h3>Add New Post</h3>

          <div className='row'>
            <div className='input-field col s8'>
              <input placeholder="Title" ref='title' type='text' className='validate' />
            </div>
            <div className='input-field col s8'>
              <textarea placeholder="Description" ref='description' className='materialize-textarea' />
            </div>
            <div className='input-field col s8'>
              <button className='btn waves-effect waves-light' type='submit' name='action'>Submit</button>
            </div>
          </div>
        </form>

      </div>
    )
  }
}
