import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        street: { type: String, required: true }, // Removed unique constraint
        city: { type: String, required: true },
        pin: { type: Number, required: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Address = mongoose.model('Address', addressSchema);

export default Address;
