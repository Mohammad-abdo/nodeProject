const express = require(`express`);
// const fs = require(`fs`);
const model = require("../models/modelTodo");

var router = express.Router();
var {
  getAllTodo,
  saveTodo,
  getTOdoById,
  updateTodo,
  deleteTodo,
} = require("../controllers/todo");


// get All todo
router.get("/",async (req, res) => {
  try{
      var todo =await getAllTodo();
      console.log(todo);
  res.json({ data: todo });
  }catch(error){
    res.status(500).json({message: 'can not  find any  todo' });

  }

});

// save in todo
router.post("/",async (req, res) => {
  var todo = req.body;

  try{

    // var newTodo= await model.create(todo)

    var newTodo= await saveTodo(todo);
      res.status(201).json({ data: newTodo });
  }catch(error){
    res.status(500).json({ message: error.message });
  }
});

// get todo by id
router.get("/:id",async (req, res) => {
  var { id } = req.params;
  try {
     var todo =await getTOdoById(id)
  if (todo) {
    res.status(200).json({ data: todo });
  } else {
    res.status(400).json({ message: "erroror Not Find todo" });
  }
  } catch (error) {
    res.status(500).json({ message: error.message });

  }
 
});
// patch id
router.patch("/:id",async (req, res) => {
  var { id } = req.params;
  var { title } = req.body;
  console.log(title);
try {
    var todo = await updateTodo(id,title);
    todo.title = title;
    res.status(200).json({ data: todo });
} catch (error) {
  res.status(500).json({ message: error.message });
}

});
router.delete("/:id",async (req, res) => {
  var { id } = req.params;
  try {
    var todo =await deleteTodo(id);
    res.status(201).json({ data: todo });
} catch (error) {
  res.status(500).json({ message: error.message });
  
}
 
});

module.exports = router;
