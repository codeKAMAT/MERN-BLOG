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

//allow json
app.use(express.json());

app.listen(6000, () => {
    console.log('Server is running on port 6000!!!!');
});
  
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
