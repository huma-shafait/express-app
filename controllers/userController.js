const userModel = require('../models/userModel');

const registerUser = (req, res) => {
    console.log("request in controller");
    const { name, email, password, phone} = req.body;

    const new_user = userModel.register({ name, email, password , phone });

    res.status(201).json({
        success: true,
        message: 'User registered successfully',
        data: new_user
    });
}

module.exports = { registerUser };