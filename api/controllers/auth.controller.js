import User from "../models/user.model.js";

export const signup = async ( req, res ) => {
    const {username, email, password} = req.body;

    if(!username || !email || !password || username === '' || password === '' || email ===  '' ) {
        return res.status(400).json({message: "All field required"});
    }

    const newUser = new User({
        username,
        password,
        email
    });

    try {
        await newUser.save();
        res.json("Signup successful")
    } catch (error) {
        res.status(500).json({message: error.message})
    }
  
}