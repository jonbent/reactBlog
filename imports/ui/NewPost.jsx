import React, {Component} from 'react';
import { browserRouter as Router } from 'react-router-dom';
import { Posts } from '../api/posts';

export default class NewPost extends Component {

  submitPost(e) {
    e.preventDefault();
    let post = {
      title: this.refs.title.value,
      description: this.refs.description.value,
      owner: Meteor.userId(),
      createdAt: new Date(),
    }

    Meteor.call('insertPost', post, (error) =>{
      if (error){
        alert('something went wrong' + error.reason);
      } else {
        alert(post);
        this.props.history.push('/');
      }
    })
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
