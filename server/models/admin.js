import mongoose from "mongoose";

const adminschema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: String,


});
export default mongoose.model('admin', adminschema);