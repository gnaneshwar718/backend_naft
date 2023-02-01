const mongoose =require("mongoose");
const UserDetailsSchema = new mongoose.Schema({
    user_name:String,
    metamask_ID:String,
    owned_NFTs:String,
    created_NFTs:List<NFT_token_ID>,
    profile_image:Image (PNG , JPEG),    


    favorite_NFTs:List <NFT_token_ID>,


    NFT_collections:List  <Collection>

},
{
    collection:"UserInfo",

}
);
mongoose.model("UserInfo",UserDetailsSchema);