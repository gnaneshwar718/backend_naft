const express = require("express");
const app = express();
app.use(express.json())
app.listen(5089,()=> {
    console.log("server started");
});



app.post("/post", async (req, res) => {
    console.log(req.body);

});   