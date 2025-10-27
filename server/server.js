import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 5000;
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/ems', {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB', err);
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
