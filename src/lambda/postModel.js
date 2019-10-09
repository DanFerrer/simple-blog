import { Schema, model } from 'mongoose';
import Comment from './commentsModel';
import Upvote from './upvoteModel';

const postSchema = new Schema({
  _id: Schema.Types.ObjectId,
  slug: { type: String, required: true},
  title: { type: String, required: [true, 'title field is required'], max: 400, min: 100 },
  content: { type: String, required: [true, 'Your post must have content'] },
  dateAdded: { type: Date, default: Date.now, required: true },
  dateUpdated: { type: Date },
  _author: {type: Schema.Types.ObjectId, ref: 'user'},
  comments: {type: [ Comment ]},
  upVotes: {type: [ Upvote ]}
});

const Post = model('post', postSchema);

export default Post;