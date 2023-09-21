// const express = require(`express`);
// const fs = require(`fs`);
const model = require("../models/modelTodo");

//Save Todo
function saveTodo(todo) {
    
    // fs.readFile("/test.json", `utf8`,(err,data)=>{
    //     var todos =JSON.parse(data);
    //     var indexId =( todos.length) ? todos[todos.length - 1].id + 1 : 1;
    //     todo.id=indexId;
    //     todos.push(todo);
    //     fs.writeFile("../test.json", JSON.stringify(todos),()=>{

    //     });
    // })
  return  model.create(todo)

}

//Get All todo
function getAllTodo() {
    // return JSON.parse(fs.readFileSync("test.json", `utf8`));
    return model.find()
}

//Get todo By ID
function getTOdoById(id) {
    return model.findOne({_id:id})
}

// Update Todo
function updateTodo(id,title) {
    return model.findByIdAndUpdate(id,{title:title})
}

//Delete Todo
function deleteTodo(id) {
    // var todos =JSON.parse(fs.readFileSync("test.json", `utf8`));;
    // var todo = todos.find((todo) => todo.id === id);
    // todos.splice(todo, 1);
    // fs.writeFileSync("test.json", JSON.stringify(todos));
    // return todo
    return model.findByIdAndRemove(id)
}

module.exports = { getAllTodo, saveTodo, getTOdoById, updateTodo, deleteTodo };
