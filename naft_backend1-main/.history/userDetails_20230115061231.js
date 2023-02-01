const mongoose =require("mongoose");
const UserDetailsSchema = new mongoose.Schema({
    email:String,
    problem:String,
    solution:String,
},
{
    collection:"UserInfo",

}
);
mongoose.model("UserInfo",UserDetailsSchema);