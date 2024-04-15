import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js'

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=> {
console.log("MOngoDB connected");
})
.catch((err) => {
    console.log(err)
})

const app = express();


app.use(express.json()); //allow json

app.listen(6000, () => {
    console.log('Server is running on port 6000!!!!');
});
  
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);


//middleware to handle error
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})