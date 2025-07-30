// import mongoose from 'mongoose';const documentSchema=new mongoose.Schema({owner:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},originalName:String,fileName:String,size:Number,mimeType:String,uploadDate:{type:Date,default:Date.now}});export default mongoose.model('Document',documentSchema);
import mongoose from "mongoose";

const documentSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  originalName: {
    type: String,
  },
  fileName: {
    type: String,
  },
  size: {
    type: Number,
  },
  mimeType: {
    type: String,
  },
  uploadDate: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Document", documentSchema);
