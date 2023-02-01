const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();
const mongoUrL = process.env.MONGO_URL;

app.use(express.json())
const cors= require("cors");
app.use(cors());


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


    require("./media_types.js")
    const User2 = mongoose.model("MediaTypes");
    app.post("/register", async (req, res) => {
        const { _id,
            media_type_name,
            top_30_NFTs,} = req.body;
            
        try{
            await User2.create({ 
                _id,
                media_type_name,
                top_30_NFTs,});
                 res.send({ status:"ok"})
           } catch (error){
           res.send({ status:"error"})
           }
        });
        require("./NFTs.js")
        const User3 = mongoose.model("NFTs");
        app.post("/register", async (req, res) => {
            const {  IPFS_hash,
                NFT_token_ID,
                title,
                price,
                description,
                primary_category,
                tags,
                votes,
                transaction_history,
                creator_metamask_id,
                owner_metamask_id,
                price_timeline,
                trend_number,
                image_feature_representation,
                date_created,
                media_type,
                view_count,
                comments} = req.body;
                
            try{
                await User3.create({ 
                    IPFS_hash,
                    NFT_token_ID,
                    title,
                    price,
                    description,
                    primary_category,
                    tags,
                    votes,
                    transaction_history,
                    creator_metamask_id,
                    owner_metamask_id,
                    price_timeline,
                    trend_number,
                    image_feature_representation,
                    date_created,
                    media_type,
                    view_count,
                    comments,});
                     res.send({ status:"ok"})
               } catch (error){
               res.send({ status:"error"})
               }
            });
            
    require("./NFt_catagories.js")
    const User4 = mongoose.model("NFT_categories");
    app.post("/register", async (req, res) => {
        const { _id,
            media_type_name,
            top_30_NFTs,} = req.body;
            
        try{
            await User4.create({ 
                _id,
                media_type_name,
                top_30_NFTs,});
                 res.send({ status:"ok"})
           } catch (error){
           res.send({ status:"error"})
           }
        });
            
        
              
    
          

app.listen(6079,()=> {
    console.log("server started");
});





