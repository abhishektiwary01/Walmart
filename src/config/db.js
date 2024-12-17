import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to DB");
    } catch (error) {
        console.log("error connecting to DB",error);
    }
}

export default connectDB;