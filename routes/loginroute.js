const express = require("express");
const router = express.Router();
const Register = require("../models/registerModel");

/* Routes */
//Get reads the registerform.pug and displays it on the path
router.get("/", (req, res) => {
  res.render("login");
});

/* router.post("/", (req, res) => {
  res.send("Have I really worked............");
}); */

// submits a login page information
// POST = data on form to bodyparser to Json(req.body)
 router.post('/', async(req, res) => {
    try{
        const user = await Register.authenticate(req.body.username, req.body.password);
        // res.send("hey " + user.firstname + " " + user.lastname)
        req.session.user = user;
        res.redirect('/register/search') //not good to use
    }catch{
        // res.send("Login Failed")
    
        // res.redirect('register')
        res.render('login',{erroe: "Failed to login, Please try again"})
    }
})
 
module.exports = router;
