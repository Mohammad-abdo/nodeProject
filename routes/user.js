const express = require(`express`);
// const fs = require(`fs`);
var router = express.Router();
const user = require("./../models/user");

var {getAllUser,saveUser, getUserById, updateUser, deleteUser,} = require("../controllers/user");


// get All todo
router.get("/",(req, res) => {
  getAllUser(res)

});

// save in todo
router.post("/", (req, res) => {
  var user = req.body;
  console.log(user);
  saveUser(res,user)

});

// get  by id
router.get("/:id", (req, res) => {
  var { id } = req.params;
 getUserById(id,res)
 
});
// patch id
router.patch("/:id", (req, res) => {
  var { id } = req.params;
  var { username,password,firstName,lastName } = req.body;
  updateUser(id,username,password,firstName,lastName,res)

});
router.delete("/:id", (req, res) => {
  var { id } = req.params;
  deleteUser(id,res)
 
});

module.exports = router;
