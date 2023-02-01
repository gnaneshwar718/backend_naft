const mongoose =require("mongoose");
const UserDetailsSchema = new mongoose.Schema({
    user_name:String,
    metamask_ID:String,
    owned_NFTs:String,
    created_NFTs: [{type: mongoose.Schema.Types.ObjectId, ref: 'NFT_token'}],
    profile_image:Image (PNG , JPEG),    


    favorite_NFTs: [{type: mongoose.Schema.Types.ObjectId, ref: 'NFT_token'}],


    NFT_collections: [{type: mongoose.Schema.Types.ObjectId, ref: 'Collection'}]

},
{
    collection:"UserInfo",v     

}
);
mongoose.model("UserInfo",UserDetailsSchema);