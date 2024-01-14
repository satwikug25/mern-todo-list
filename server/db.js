const mongoose = require("mongoose");
require('dotenv').config()
mongoose.connect(process.env.MONGODB_URI);

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const Todo = mongoose.model('Todo',todoSchema);

// const addTodb = async (userBody) => {
//     const newTodo = await Todo.create({
//         title: userBody.title,
//         description: userBody.description,
//         completed: false
//     })

   

    

// }

// const getData = async () => {
//     const data = await Todo.find();

//     return data;
    
// }

// const updateData = async(userBody) =>{
//     const update = await Todo.updateOne({
//         _id: userBody.id
//     }, {
//         completed: true
//     })

//     return update;



// }


module.exports = {
    Todo:Todo,
    
}


