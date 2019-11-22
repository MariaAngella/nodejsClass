const express = require("express"); 
const router= express.Router();
const Register = require("../models/registerModel");


/* Routes */
//Get reads the registerform.pug and displays it on the path
router.get("/", (req, res) => {
    res.render("register");
  });
  
  //extracts all data for the database and displays it
router.post("/", async (req, res) => {
  const register = new Register(req.body); //create an instance of the Register model for data entered(req.body==got from the user)
  try {
    await register.save();
    console.log("Item has been saved");
    const items = await Register.find();
    res.render("login", { users: items });
  } catch (err) {
    //.catch promise and used because nodejs asyncronously waits
    res.status(500).send("unable to save to database");
  }
});


//returns a specific page
router.get("/search", async (req, res) => {
  if (req.session.user){
//console.log(req.session.user)
// try{
  //let allow for variable reassignment
  let items=await Register.find()
  // if (req.query.city){
  //   items = await Register.find({city:req.query.city})
  // }
  res.render('list',{users:items,currentUser:req.session.user})
}
else {
  res.redirect('/login')
}

// catch(err){
//   res.status(500).send('unable to search in the database')
// }
  // }
});





  
  module.exports=router;