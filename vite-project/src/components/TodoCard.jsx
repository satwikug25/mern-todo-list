import axios from 'axios'
import React from 'react'

const TodoCard = ({item}) => {


    const handleComplete = async(id) => {
        
        
        const res = await axios.put("http://127.0.0.1:3000/completed",{
          id
        });

        


    }

  return (
    <div>
        <h4>{item._id}</h4>
        <h1>{item.title}</h1>
        <h1>{item.description}</h1>
        {console.log(item)}

        <button onClick={()=>handleComplete(item._id)}>✅</button>

    </div>
  )
}

export default TodoCard