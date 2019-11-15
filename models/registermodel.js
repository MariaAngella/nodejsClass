
const mongoose = require("mongoose");


/* creates documents in the db------------------------------------- name of the collection model(collection storage,schemaStructure)....takes on the structure of schema and the req.body(user data) into the Register collection */
// const Register = mongoose.model("Register", registerSchema);

/* Creating a Database Schema....schema should be the same format as req.body */
const registerSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: "Please Enter first name"
  },
  lastname: String,
  gender: String,
  country: String,
  city: String
});


//model creation
module.exports = mongoose.model("Register", registerSchema);