var express = require('express');
var router = express.Router();
const{ registerUser} =require("../controllers/userController");

router.post("/register", registerUser);

module.exports = router;