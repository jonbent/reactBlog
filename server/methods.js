import { Meteor } from 'meteor/meteor';
import { Posts } from '../imports/api/posts';

Meteor.methods({
  insertPost(post){
    Posts.insert(post)
  },

  updatePost(post){
    Posts.update(post._id,
    { $set: post })
  },

  deletePost(post){
    Posts.remove(post._id);
  }
});
