// import jwt from 'jsonwebtoken';import User from '../models/User.js';export const authMiddleware=async(req,res,next)=>{const header=req.headers.authorization;if(!header?.startsWith('Bearer '))return res.status(401).json({error:'No token'});try{const token=header.split(' ')[1];const decoded=jwt.verify(token,process.env.JWT_SECRET);const user=await User.findById(decoded.id);if(!user)return res.status(401).json({error:'Invalid token'});req.user=user;next()}catch(err){return res.status(401).json({error:'Token error'})}};
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const authMiddleware = async (req, res, next) => {
  const header = req.headers.authorization;

  // ✅ Check if token exists
  if (!header?.startsWith("Bearer ")) {
    return res.status(401).json({ error: "No token" });
  }

  try {
    // ✅ Extract token
    const token = header.split(" ")[1];

    // ✅ Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // ✅ Find user
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ error: "Invalid token" });
    }

    // ✅ Attach user to request
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Token error" });
  }
};
