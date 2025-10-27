import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    newTask: Boolean,
    Failed: Boolean,
    completed: Boolean,
    pending: Boolean,
    date: String,
    category: String,
    description: String,
});

const employeeSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: String,
    tasks: [taskSchema],
});

export default mongoose.model('Employee', employeeSchema);