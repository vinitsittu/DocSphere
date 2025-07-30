// import express from 'express';import multer from 'multer';import{authMiddleware}from'../middleware/authMiddleware.js';import{uploadDocument,listDocuments,downloadDoc,deleteDoc}from'../controllers/documentController.js';const storage=multer.diskStorage({destination:(req,file,cb)=>cb(null,'uploads'),filename:(req,file,cb)=>cb(null,Date.now()+'-'+file.originalname)});const upload=multer({storage});const router=express.Router();router.post('/upload',authMiddleware,upload.single('file'),uploadDocument);router.get('/list',authMiddleware,listDocuments);router.get('/download/:id',authMiddleware,downloadDoc);router.delete('/delete/:id',authMiddleware,deleteDoc);export default router;
import express from "express";
import multer from "multer";
import { authMiddleware } from "../middleware/authMiddleware.js";
import {
  uploadDocument,
  listDocuments,
  downloadDoc,
  deleteDoc,
} from "../controllers/documentController.js";

const router = express.Router();

// ✅ Multer Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads"),
  filename: (req, file, cb) =>
    cb(null, `${Date.now()}-${file.originalname}`),
});

const upload = multer({ storage });

// ✅ Document Routes
router.post("/upload", authMiddleware, upload.single("file"), uploadDocument);
router.get("/list", authMiddleware, listDocuments);
router.get("/download/:id", authMiddleware, downloadDoc);
router.delete("/delete/:id", authMiddleware, deleteDoc);

export default router;
