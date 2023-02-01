const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json())

const mongoUrL=
"mongodb+srv://gp:gp@cluster0.3bofrpb.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongoUrL,{
    useNewUrlParser: true,
})
 .then(() => {console.log("Connected to database");
})
.catch((e) => console.log(e));


app.listen(6079,()=> {
    console.log("server started");
});
app.post("/post", async (req, res) => {
    console.log(req.body);
 
 const {data} = req.body;
 try{
    if (data == "gnaneshwar"){
        res.send({status: ok,});
    }else{
        res.end({status: "error"});
    }
} catch (error) {
    res.end({status: "user not found"});
}
});

require("./userDetails.js")

const User = mongoose.model("UserInfo");
app.post("/post", async (req, res) => {
    const {  email,
        problem,
        solution} = req.body;
    try{
        await User.create({ email,
             problem: problem, 
             solution: solution,});
             res.send({ status:"ok"})
       } catch (error){
       res.send({ status:"error"})
       }
    });


          


