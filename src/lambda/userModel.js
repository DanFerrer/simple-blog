import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: { type: String, required: false, default: '' },
  userName: { type: String, required: false, default: '' },
  password:{ type: String, required: true },
  email: {type: String, required: true },
  posts: [{ type: Schema.Types.ObjectId, ref: 'post' }],
  dateAdded: { type: Date, default: Date.now, required: true },
  dateUpdated: { type: Date },
});

const User = model('user', userSchema);

export default User;