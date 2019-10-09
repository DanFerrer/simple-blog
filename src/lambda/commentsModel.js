import { Schema, model } from 'mongoose';

const commentSchema = new Schema({
  _id: Schema.Types.ObjectId,
  _author: {type: Schema.Types.ObjectId, ref: 'author'},
  content: { type: String, required: [true, 'Your comment must have content'] },
  dateAdded: { type: Date, default: Date.now, required: true },
  dateUpdated: { type: Date },
});

const Comment = model('post', commentSchema);

export default Comment;