'use client';

import axios from 'axios';
import { ChangeEvent, useState } from 'react';

const PostForm = () => {
  const [post, setPost] = useState('');
  const [title, setTitle] = useState('');

  const onSubmitHandler = async (e:ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = {
      name: post,
      title: title,
      id: Math.floor(Math.random() * 1000) + 1,
    };

    await axios.post('https://jsonplaceholder.typicode.com/posts', result);
    alert('Submitted!');
    
    setPost('');
    setTitle('');
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto' }}>
      <h2>Create a Post</h2>
      <form onSubmit={onSubmitHandler}>
        <div style={{ marginBottom: '10px' }}>
          <label>Post Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Post Content:</label>
          <textarea
            value={post}
            onChange={(e) => setPost(e.target.value)}
            style={{ width: '100%' }}
          />
        </div>
        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
};

export default PostForm;
