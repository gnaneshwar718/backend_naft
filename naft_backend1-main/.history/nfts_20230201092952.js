const mongoose = require("mongoose");
const NFTsSchema = new mongoose.Schema({
  IPFS_hash: { type: String, required: true },
  NFT_token_ID: { type: Number, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: false, default: "" },
  primary_category: { type: String, required: true },
  tags: { type: [String], required: false, default: [] },
  votes: { type: [String], required: false, default: [] },
  transaction_history: { type: [{ metamask_id: String, timestamp: Date }], required: false, default: [] },
  creator_metamask_id: { type: String, required: true },
  owner_metamask_id: { type: String, required: true },
  price_timeline: { type: [{ timestamp: Date, price: Number }], required: false, default: [] },
  trend_number: { type: Number, required: false, default: 0 },
  image_feature_representation: { type: Object, required: false, default: {} },
  date_created: { type: Date, required: true },
  media_type: { type: String, required: true },
  view_count: { type: Number, required: false, default: 0 },
  comments: { type: [Object], required: false, default: [] },
},
{
  collection: "NFTs",
});
mongoose.model("NFTs", NFTsSchema);
