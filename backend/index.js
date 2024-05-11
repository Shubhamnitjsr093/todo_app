const express = require("express");
const {createTodo,updateTodo} =  require("./type");
const {todo} = require("./db");
const app = express();


app.use(express.json());
// body{
    //title: string
    //description: string
//}
app.post("/todo",async (req,res)=>{
     const createPayload = req.body;
     const parsePayload = createTodo.safeParse(createPayload);
     if(!parsePayload.success){
          res.status(411).json({
            msg:"you sent the worng input",
          })
          return;
     }
    
     await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
     })
     res.json({
        msg:"Todo created"
     })
})
app.get("/todos",async (req,res)=>{
    const todos = await todo.find({});
     
    res.json({
        todos
    })

})
app.put("/comleted",async (req,res)=>{
     const updatePayload = req.body;
     const parsePayload = createTodo.safeParse(updatePayload);
     if(!parsePayload.success){
          res.status(411).json({
            msg:"you sent the worng input",
          })
          return;
     }
     await todo.update({
        _id:req.body.id
     },{
        completed:true
     })
     res.json({
        msg:"Todo mark as completed"
     })
})