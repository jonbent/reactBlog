import React, {Component} from 'react';
import { ListItem } from 'material-ui/List';
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';
import { redA700 } from 'material-ui/styles/colors'
import Divider from 'material-ui/Divider'

export default class Blog extends Component {

  updateCurrentPost(post){
    this.props.updateCurrentPost(post);
  }

  deletePost(post){
    Meteor.call('deletePost', post, (error) => {
      if(error){
        alert('Something went wrong deleting this post.' + error.reason)
      } else {
        alert('Post Deleted Successfully')
      }
    })
  }

  render() {
    return(
      <div>
        {this.props.post.owner === Meteor.userId() ? (
          <ListItem
            primaryText={this.props.post.title}
            rightIcon = {<ActionDeleteForever hoverColor={redA700}
                            onClick={this.deletePost.bind(this, this.props.post)}
                         />}
            onClick={this.updateCurrentPost.bind(this, this.props.post)}
            secondaryText = {this.props.post.createdAt.toDateString()}
          />
        ) : (
          <ListItem
            primaryText={this.props.post.title}
            onClick={this.updateCurrentPost.bind(this, this.props.post)}
            secondaryText = {this.props.post.createdAt.toDateString()}
          />
        )}
        <Divider />
      </div>
    )
  }
}
