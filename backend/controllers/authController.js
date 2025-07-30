// import{registerSchema,loginSchema}from'../validations/authValidation.js';import{registerUser,loginUser}from'../services/authService.js';export const register=async(req,res,next)=>{try{const{error}=registerSchema.validate(req.body);if(error)return res.status(400).json({error:error.details[0].message});const result=await registerUser(req.body.email,req.body.password);res.json(result)}catch(err){next(err)}};export const login=async(req,res,next)=>{try{const{error}=loginSchema.validate(req.body);if(error)return res.status(400).json({error:error.details[0].message});const result=await loginUser(req.body.email,req.body.password);res.json(result)}catch(err){next(err)}};
import { registerSchema, loginSchema } from "../validations/authValidation.js";
import { registerUser, loginUser } from "../services/authService.js";

// ✅ Register Controller
export const register = async (req, res, next) => {
  try {
    const { error } = registerSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const result = await registerUser(req.body.email, req.body.password);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

// ✅ Login Controller
export const login = async (req, res, next) => {
  try {
    const { error } = loginSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const result = await loginUser(req.body.email, req.body.password);
    res.json(result);
  } catch (err) {
    next(err);
  }
};
