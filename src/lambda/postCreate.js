import mongoose from 'mongoose';

import db from './server';

import Post from './postModel';

const createPost = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    const data = JSON.parse(event.body);
    debugger
    const post = {
      _id: mongoose.Types.ObjectId(),
      _author: data.user,
      title: data.title,
      content: data.content
    };

    const response = {
      msg: 'Post successfully created',
      data: post
    };

    await Post.create(post);

    return {
      statusCode: 201,
      body: JSON.stringify(response)
    }
  } catch (err) {
    console.log('postCreate', err);

    return {
      statusCode: 500,
      body: JSON.stringify({msg: err.message})
    }
  }
};

exports.handler = createPost; 