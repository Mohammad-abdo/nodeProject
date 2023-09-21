
const model = require("../models/user");

//Save user
 async function saveUser(res,user) {
 try{
  var newUser= await  model.create(user);
  // console.log(newUser);
  // var newUser= await saveUser(user)
    res.status(201).json({message: "created", data:{ newUser }});
}catch(err){
  res.status(500).json({ message: "err.message" });
}
}
//Get All user
async function getAllUser(res) {

  try{
    var user =await model.find();;
res.json(  {message: "done", data: {user }});
}catch(err){
  res.status(500).json({message: 'can not  find any  todo' });

}
}

//Get user By ID
async function getUserById(id,res) {

try {
  var user =await  model.findOne({ _id: id });
if (user) {
 res.status(200).json({ data: user });
} else {
 res.status(400).json({ message: "Error Not Find todo" });
}
} catch (err) {
 res.status(500).json({ message: err.message });

}
}

// Update user
async function updateUser(id,username,password,firstName,lastName,res) {
//   return model.findByIdAndUpdate(id, { title: title });

try {
    var user = await model.findByIdAndUpdate({ _id: id,username,password,firstName,lastName });
    // user.username = username;
    // user.password = password;
    // user.firstName = firstName;
    // user.lastName = lastName;
    res.status(200).json({ data: user });
} catch (err) {
  res.status(500).json({ message: err.message });
}
}

//Delete user
 async function deleteUser(id,res) {
//   return model.findByIdAndRemove(id);
try {
  var user = await model.findByIdAndRemove(id);
  res.status(201).json({ data: user });
} catch (err) {
res.status(500).json({ message: err.message });
}
}

module.exports = { getAllUser, saveUser, getUserById, updateUser, deleteUser };
