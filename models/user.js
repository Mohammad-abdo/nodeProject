const mongoose = require(`mongoose`)

const UserSchema =new mongoose.Schema({
    username:{
        type:String,
        min:8,
        max:50,
        trim:true,
        required:true,
        default:"Any Title",
    },
    password:{
        type:String,
        required:true,
    },
    firstName:{
        type:String,
        required:true,
        min:5,
        max:15

    },
    lastName:{
        type:String,
        required:true,
        min:5,
        max:15
    },
    dop:{
        type:Date,
        Optional:true,
    }
}
,{
    timestamps: true,
})

// UserSchema.pre("",async function(next){
//     var d=await 
// })
const User = mongoose.model('User',UserSchema);
module.exports = User
