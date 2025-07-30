// import Document from '../models/Document.js';import fs from 'fs';import path from 'path';export const saveDocument=async(file,userId)=>{const doc=new Document({owner:userId,originalName:file.originalname,fileName:file.filename,size:file.size,mimeType:file.mimetype});await doc.save();return doc};export const getDocuments=async(userId,query='')=>await Document.find({owner:userId,originalName:{$regex:query,$options:'i'}}).sort({uploadDate:-1});export const downloadDocument=async(docId,userId)=>{const doc=await Document.findById(docId);if(!doc||doc.owner.toString()!==userId.toString())throw new Error('Document not found');return doc};export const deleteDocument=async(docId,userId)=>{const doc=await Document.findById(docId);if(!doc||doc.owner.toString()!==userId.toString())throw new Error('Document not found');fs.unlinkSync(path.resolve(`uploads/${doc.fileName}`));await doc.deleteOne()};
import Document from "../models/Document.js";
import fs from "fs";
import path from "path";

// ✅ Save Document
export const saveDocument = async (file, userId) => {
  const doc = new Document({
    owner: userId,
    originalName: file.originalname,
    fileName: file.filename,
    size: file.size,
    mimeType: file.mimetype,
  });

  await doc.save();
  return doc;
};

// ✅ Get Documents (with optional search query)
export const getDocuments = async (userId, query = "") =>
  await Document.find({
    owner: userId,
    originalName: { $regex: query, $options: "i" },
  }).sort({ uploadDate: -1 });

// ✅ Download Document
export const downloadDocument = async (docId, userId) => {
  const doc = await Document.findById(docId);
  if (!doc || doc.owner.toString() !== userId.toString()) {
    throw new Error("Document not found");
  }
  return doc;
};

// ✅ Delete Document
export const deleteDocument = async (docId, userId) => {
  const doc = await Document.findById(docId);
  if (!doc || doc.owner.toString() !== userId.toString()) {
    throw new Error("Document not found");
  }

  fs.unlinkSync(path.resolve(`uploads/${doc.fileName}`));
  await doc.deleteOne();
};
