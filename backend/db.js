const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://shubham:123@cluster0.mqk7vks.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title:String,
    decription:String,
    completed:Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports={
    todo
}