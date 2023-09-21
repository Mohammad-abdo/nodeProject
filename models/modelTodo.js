const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    min: [3, "title is less than 3charaters"],
    max: 25,
    trim: true,
    required: true,
    default: "Any Title",
  },
  status: {
    type: String,
    enum: ["todo", "in Progres", "Done"],
    default: "todo",

  },
  userId: { type: mongoose.SchemaTypes.ObjectId, ref: "User" }
  
},
{
    timestamps: true,
  }
);

var todo = mongoose.model("Todo", todoSchema);
module.exports = todo;
