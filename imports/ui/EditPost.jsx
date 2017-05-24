import React, {Component} from 'react';

export default class EditPost extends Component {

  showBlog(){
    this.props.showBlog();
  }
  editPost(e) {

    e.preventDefault();
    let post = {
      _id: this.props.currentPost._id,
      title: this.refs.title.value,
      description: this.refs.description.value,
      owner: Meteor.userId(),
      createdAt: new Date(),
    }

    Meteor.call('updatePost', post, (error) =>{
      if (error){
        alert('something went wrong' + error.reason);
      } else {
        alert('post updated');
        this.showBlog();
      }
    })
  }

  render() {

    const currentPost = this.props.currentPost;
    return(
      <div className='row'>
        <form className='col s12' onSubmit={this.editPost.bind(this)}>
          <h3>Add New Post</h3>

          <div className='row'>
            <div className='input-field col s8'>
              <input placeholder="Title" ref='title' type='text' className='validate' defaultValue={currentPost.title} />
            </div>
            <div className='input-field col s8'>
              <textarea placeholder="Description" ref='description' className='materialize-textarea' defaultValue={currentPost.description}/>
            </div>
            <div className='input-field col s8'>
              <button className='btn waves-effect waves-light' type='submit' name='action'>Edit</button>
            </div>
          </div>
        </form>

      </div>
    )
  }
}
