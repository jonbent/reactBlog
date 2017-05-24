import { Mongo } from 'meteor/mongo';

export const Posts = new Mongo.Collection("posts");

Posts.allow({
  insert() { return false;},
  update() { return false;},
  remove() { return false;}
});
Posts.deny({
  insert() { return true;},
  update() { return true;},
  remove() { return true;}
});

const PostSchema = new SimpleSchema({
  title: { type: String },
  description: { type: String },
  createdAt: { type: Date },
  owner: { type: String, optional: true },
})

Posts.attachSchema(PostSchema)
