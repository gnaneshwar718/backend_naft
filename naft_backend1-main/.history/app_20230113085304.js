const express = require("express");
const app = express();
app.use(express.json())
app.listen(6089,()=> {
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
   