import bcrypt from "bcrypt"; // hashing password
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  location: String,
});


userSchema.pre('save', async function() { // Mongoose Middleware
  // console.log("Users password:", this.password); // before
  this.password = await bcrypt.hash(this.password, 5);
  // console.log("Hashed password", this.password); // after
});

const User = mongoose.model('User', userSchema)
export default User;
