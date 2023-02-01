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
           res.send({status: "ok"});
       }else{
           res.send({status: "error"});
       }
   } catch (error) {
       res.send({status: "user not found"});
   }
   });
       


          


