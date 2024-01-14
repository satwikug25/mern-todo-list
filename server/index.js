const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { Todo } = require("./db");
const cors = require("cors");
const app = express();
const port = 3000;


app.use(express.json());

app.use(cors());

app.post('/addPost',async (req,res)=>{
    const userBody = req.body;
    const parsedload = createTodo.safeParse(userBody);

    if(!parsedload.success){
        res.status(411).json({msg:"not valid input"});
        return;
    }

    await Todo.create({
                title: userBody.title,
                description: userBody.description,
                completed: false
            })

    res.json(
            {
                msg: 'Todo Created'
            }
    )
    

    

    //put it in mongo
    




})

app.get('/todos',async (req,res)=>{

        const dat = await Todo.find({completed:false});
        res.json({dat});

    
    

})

app.put('/completed',async(req,res)=>{
    const userBody = req.body;
    const parsedLoad = updateTodo.safeParse(userBody);

    if(!parsedLoad.success){ 
        res.status(411).json({msg:"not valid input"});
        return;


    }

    await Todo.updateOne({
                _id: userBody.id
            }, {
                completed: true
            })

    res.json({
        msg: "To do completed" 
    })






})




app.listen(port);