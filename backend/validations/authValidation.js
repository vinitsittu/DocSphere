// import Joi from 'joi';export const registerSchema=Joi.object({email:Joi.string().email().required(),password:Joi.string().min(6).required()});export const loginSchema=Joi.object({email:Joi.string().email().required(),password:Joi.string().required()});
import Joi from "joi";

// ✅ Register Validation Schema
export const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

// ✅ Login Validation Schema
export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
