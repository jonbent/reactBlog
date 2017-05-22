import { Mongo } from 'meteor/mongo';

export const Posts = new Mongo.Collection("posts");

const PostSchema = new SimpleSchema({
  title: { type: String },
  description: { type: String },
  createdAt: { type: Date }
})

Posts.attachSchema(PostSchema)
