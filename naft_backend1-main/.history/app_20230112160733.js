const express = require("express");
const app = express();
app.listen(5099,()=> {
    console.log("server started");
});



app.post("/post", async (req, res) => {
    console.log(req.body);

});   