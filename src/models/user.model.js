import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        mobile: { type: Number, required: false },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

// Pre-save middleware to hash the password
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }

    try {
        const salt = await bcrypt.genSalt(10); // Generate salt asynchronously
        this.password = await bcrypt.hash(this.password, salt); // Hash the password with the salt
        next();
    } catch (error) {
        next(error);
    }
    
});


userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compareSync(enteredPassword, this.password);
};


const User = mongoose.model('User', userSchema);



export default User;
