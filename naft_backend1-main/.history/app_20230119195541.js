const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json())
const cors= require("cors");
app.use(cors());
const mongoUrL=
"mongodb+srv://gp:gp@cluster0.3bofrpb.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongoUrL,{
    useNewUrlParser: true,
})
 .then(() => {console.log("Connected to database");
})
.catch((e) => console.log(e));

require("./userDetails.js")
const User = mongoose.model("UserInfo");
app.post("/register", async (req, res) => {
    const { user_name,
        metamask_ID,
        owned_NFTs,
        created_NFTs,
        profile_image,    
    
    
        favorite_NFTs,
    
    
        NFT_collections ,} = req.body;
        
    try{
        await User.create({ 
            user_name,
            metamask_ID,
            owned_NFTs,
            created_NFTs,
            profile_image,    
        
        
            favorite_NFTs,
        
        
            NFT_collections ,});
             res.send({ status:"ok"})
       } catch (error){
       res.send({ status:"error"})
       }
    });


          

app.listen(6079,()=> {
    console.log("server started");
});





