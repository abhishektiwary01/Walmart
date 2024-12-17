import Address from "../models/address.model.js"; // Correct import

const addaddress = async (req, res) => {
    try {
        const { name, street, city, pin } = req.body;
        const address = await Address.create({
            name,
            street,
            city,
            pin 
        });
        return res.status(201).send({ message: "Address added successfully" });
    } catch (error) {
        return res.status(500).send({ message: "Error occurred", error: error.message });
    }
};

export { addaddress }; // Ensure you are exporting it correctly
