import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './src/config/db.js';
import userRouter from './src/routes/user.routes.js';
import addressRouter from './src/routes/address.routes.js';
import productRouter from './src/routes/product.routes.js';
dotenv.config();

const app = express();

//MiddleWare
app.use(express.json());
app.use(cors());

//routes 
app.use("/api/user",userRouter);
app.use("/api/address",addressRouter);
app.use('/api/product', productRouter);

app.get('/',(req,res)=>{
    res.status(200).send("Welcome to Walmart");
})
const PORT = 5000;

app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server is running on port ${PORT}`);
})