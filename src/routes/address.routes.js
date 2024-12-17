import express from 'express';
import { addaddress } from '../controllers/address.controller.js'; // Import the correct controller

const addressRouter = express.Router();

addressRouter.post('/addaddress', addaddress); // Use the controller function

export default addressRouter; // Export the correct router
