const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json())

const mongoUrL=
"mongodb+srv://last:<last>@cluster0.vu1vjhm.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(mongoUrL,{
    useNewUrlParser: true,
})
 .then(() => {console.log("Connected to database");
})
.catch((e) => console.log(e));


app.listen(6089,()=> {
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
   
          


