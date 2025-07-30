// import mongoose from 'mongoose';import bcrypt from 'bcrypt';const userSchema=new mongoose.Schema({email:{type:String,required:true,unique:true},password:{type:String,required:true}});userSchema.pre('save',async function(next){if(!this.isModified('password'))return next();this.password=await bcrypt.hash(this.password,12);next()});userSchema.methods.comparePassword=function(candidate){return bcrypt.compare(candidate,this.password)};export default mongoose.model('User',userSchema);
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// ✅ Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// ✅ Compare entered password with hashed password
userSchema.methods.comparePassword = function (candidate) {
  return bcrypt.compare(candidate, this.password);
};

export default mongoose.model("User", userSchema);
