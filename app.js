
const express = require("express");
const hbs=require("hbs")
const path=require("path")
const TodoSchema = require("./routes/routTodo");
const UserSchema = require("./routes/user");
var rivewSchema = require("./routes/rivewsRoute");
const hostRoute = require("./routes/hostRoute");
const model = require("./models/user");
const async = require("hbs/lib/async");

const app = express();
app.use(express.json());
const staticPath=path.join(__dirname,"../static")
app.set("view engine", "hbs");
app.set("views ", staticPath);

app.use(express.urlencoded({ extended: false }));
app.post("/signup",async (req,res)=>{
    const data={
        username:req.body.username,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        password:req.body.password

    }
    await model.insertMany([data])
    res.render("home")
})
app.get("/", (req, res) => {
  console.log("login");
});
app.get("/signup", (req, res) => {
  console.log("signup");
});

app.use(express.json());
app.use("/Rivew", rivewSchema)
app.use("/Todo", TodoSchema)
app.use("/User", UserSchema)
app.use("/host", hostRoute)
module.exports = app;
