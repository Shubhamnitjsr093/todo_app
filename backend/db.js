const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://project1:123@cluster0.hodzsns.mongodb.net/test")
const todoSchema = mongoose.Schema({
    title:String,
    decription:String,
    completed:Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports={
    todo
}