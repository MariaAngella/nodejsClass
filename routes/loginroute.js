const express = require("express");
const router = express.Router();
const Register = require("../models/registerModel");

/* Routes */
//Get reads the registerform.pug and displays it on the path
router.get("/", (req, res) => {
  res.render("login");
});

// submits a login page information
 router.post('/', async(req, res) => {
    try{
        const user = await Register.authenticate(req.body.username, req.body.password);
        res.send("hey " + user.firstname + " " + user.lastname)
    }catch{
        res.send("Login Failed")
        // res.redirect('register')
    }
})
 
module.exports = router;
