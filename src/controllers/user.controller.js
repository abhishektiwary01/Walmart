import User from '../models/user.model.js'

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.create({
            name,
            email,
            password 
        });
        return res.status(201).send({ message: "User registration successful" });
    } catch (error) {
        return res.status(500).send({ message: "Error occurred", error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email});
        
        if(!user){ return res.status(404).send({message: "User not found"})}
        
        const passwordMatch = await user.matchPassword(password);
        
        if(!passwordMatch){ return res.status(401).send({message: "Invalid password"})}
        
        return res.status(200).send({message:"User logged in successfully"});
    
    } catch (error) {
        
        return res.status(500).send({ message: "Error occurred", error: error.message });
    }}

export {
    register,
    login
} ;

