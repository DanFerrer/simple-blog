import { Schema, model } from 'mongoose';

const upvoteSchema = new Schema({
  _id: Schema.Types.ObjectId,
  _author: {type: Schema.Types.ObjectId, ref: 'user'},
  dateAdded: { type: Date, default: Date.now, required: true },
});

const upvote = model('upVote', upvoteSchema);

export default upvote;