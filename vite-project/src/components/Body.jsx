import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import TodoCard from './TodoCard';




const Body = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    const [todo, setTodo] = useState([]);


     const fetchdata = async () => {
        console.log(",nfkjdn")
        try {
            const res = await axios.get('http://127.0.0.1:3000/todos');
            const data = res.data.dat;
            setTodo(data);

        }
        catch (error) {
            // Handle errors
            console.error('API Error:', error);
        }
    };



    const addTodo = async () =>{
        
        
        const post = await axios.post('http://127.0.0.1:3000/addPost', {
            title,
            description
        });

       






    }

    useEffect(() => {
      

    fetchdata();

    }, [todo]);
    
  return (
    <div>
        <div>
            <input onChange={(e)=>{setTitle(e.target.value)}} type="text" placeholder='title' value={title}/>
            <input onChange={(e)=>{setDescription(e.target.value)}} type="text" placeholder='descritption' value={description}/>

            <button onClick={addTodo}>+</button>
        </div>


        <div>
            {
                todo.map((item)=>{
                    return (
                    <TodoCard item={item} key={item._id}/>
                    )
                })
            }


            
        </div>
        

    </div>
  )
}

export default Body