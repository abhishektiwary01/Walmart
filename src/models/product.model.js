import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Define a schema for the product
const productSchema = new Schema({
  _id: { type: String, required: true }, // Explicitly define _id as a string
  title: { type: String, required: true },
  brand: { type: String, required: true },
  price: {
    amount: { type: Number, required: true },
    currency: { type: String, required: true },
  },
  ratings: {
    average: { type: Number, required: true },
    count: { type: Number, required: true },
  },
  colors: [String],
  sizes: [String],
  shipping: {
    cost: { type: Number, required: true },
    time: { type: String, required: true },
  },
  details: {
    material: { type: String, required: true },
    care: { type: String, required: true },
    countryOfOrigin: { type: String, required: true },
    fit: { type: String, required: true },
    weight: { type: String, required: true },
    length: { type: String, required: true },
    availability: {
      inStock: { type: Boolean, required: true },
      quantity: { type: Number, required: true },
    },
    seller: {
      name: { type: String, required: true },
      rating: { type: Number, required: true },
    },
    returnPolicy: {
      days: { type: Number, required: true },
      freeReturns: { type: Boolean, required: true },
    },
  },
}, { timestamps: true });

// Create the model based on the schema


// Create the model based on the schema
const Product = mongoose.model('Product', productSchema);

export default Product;
