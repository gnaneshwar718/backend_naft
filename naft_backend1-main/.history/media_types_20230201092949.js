const mongoose = require("mongoose");
const MediaTypesSchema = new mongoose.Schema({
  _id: { type: mongoose.Types.ObjectId, required: true, default: mongoose.Types.ObjectId, unique: true },
  media_type_name: { type: String, required: true, unique: true },
  top_30_NFTs: { type: [String], required: false, default: [] },
},
{
  collection: "MediaTypes",
});
mongoose.model("MediaTypes", MediaTypesSchema);
