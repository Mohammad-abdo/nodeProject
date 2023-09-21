const mongoose = require("mongoose");
const app = require("./app");
const DB = "mongodb://127.0.0.1:27017/tododb";
mongoose.connect(DB).then(() => console.log("Connected To Db Successfully"))
// creat Prot
var port = 9000;
app.listen(port, () => {
  console.log(`server listinf successfuly ${port}`);
});
