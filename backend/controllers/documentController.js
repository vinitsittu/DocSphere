// import{saveDocument,getDocuments,downloadDocument,deleteDocument}from'../services/docService.js';export const uploadDocument=async(req,res,next)=>{try{if(!req.file)return res.status(400).json({error:'No file uploaded'});const doc=await saveDocument(req.file,req.user._id);res.json({message:'File uploaded',doc})}catch(err){next(err)}};export const listDocuments=async(req,res,next)=>{try{const docs=await getDocuments(req.user._id,req.query.q||'');res.json(docs)}catch(err){next(err)}};export const downloadDoc=async(req,res,next)=>{try{const doc=await downloadDocument(req.params.id,req.user._id);res.download(`uploads/${doc.fileName}`,doc.originalName)}catch(err){next(err)}};export const deleteDoc=async(req,res,next)=>{try{await deleteDocument(req.params.id,req.user._id);res.json({message:'Deleted successfully'})}catch(err){next(err)}};
import {
  saveDocument,
  getDocuments,
  downloadDocument,
  deleteDocument,
} from "../services/docService.js";

// ✅ Upload Document
export const uploadDocument = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const doc = await saveDocument(req.file, req.user._id);
    res.json({ message: "File uploaded", doc });
  } catch (err) {
    next(err);
  }
};

// ✅ List Documents
export const listDocuments = async (req, res, next) => {
  try {
    const query = req.query.q || "";
    const docs = await getDocuments(req.user._id, query);
    res.json(docs);
  } catch (err) {
    next(err);
  }
};

// ✅ Download Document
export const downloadDoc = async (req, res, next) => {
  try {
    const doc = await downloadDocument(req.params.id, req.user._id);
    res.download(`uploads/${doc.fileName}`, doc.originalName);
  } catch (err) {
    next(err);
  }
};

// ✅ Delete Document
export const deleteDoc = async (req, res, next) => {
  try {
    await deleteDocument(req.params.id, req.user._id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    next(err);
  }
};
