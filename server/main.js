import { Meteor } from 'meteor/meteor';
import { Posts } from '../imports/api/posts';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('posts', function(){
    return Posts.find({});
  })
});
