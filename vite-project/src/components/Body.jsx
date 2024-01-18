import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoCard from './TodoCard';

const Body = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [todo, setTodo] = useState([]);

  const fetchdata = async () => {
    try {
      const res = await axios.get('http://127.0.0.1:3000/todos');
      const data = res.data.dat;
      setTodo(data);
    } catch (error) {
      console.error('API Error:', error);
    }
  };

  const addTodo = async () => {
    const post = await axios.post('http://127.0.0.1:3000/addPost', {
      title,
      description,
    });
  };

  useEffect(() => {
    fetchdata();
  }, [todo]);

  return (
    <div className="container mx-auto p-8">
      <div className="mb-4">
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title"
          value={title}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Description"
          value={description}
          className="p-2 border border-gray-300 rounded"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white p-2 rounded cursor-pointer"
        >
          +
        </button>
      </div>

      <div>
        {todo.map((item) => (
          <TodoCard item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
