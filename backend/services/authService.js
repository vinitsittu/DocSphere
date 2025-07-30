// import User from '../models/User.js';import jwt from 'jsonwebtoken';export const registerUser=async(email,password)=>{const existing=await User.findOne({email});if(existing)throw new Error('User already exists');const user=new User({email,password});await user.save();return{message:'Registered successfully'}};export const loginUser=async(email,password)=>{const user=await User.findOne({email});if(!user)throw new Error('Invalid credentials');const match=await user.comparePassword(password);if(!match)throw new Error('Invalid credentials');const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1h'});return{token}};
import User from "../models/User.js";
import jwt from "jsonwebtoken";

// ✅ Register New User
export const registerUser = async (email, password) => {
  const existing = await User.findOne({ email });
  if (existing) throw new Error("User already exists");

  const user = new User({ email, password });
  await user.save();

  return { message: "Registered successfully" };
};

// ✅ Login User
export const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid credentials");

  const match = await user.comparePassword(password);
  if (!match) throw new Error("Invalid credentials");

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  return { token };
};
