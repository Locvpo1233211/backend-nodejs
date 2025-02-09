const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    city: String,
});
const User = mongoose.model("User", userSchema);
module.exports = User;
// Compare this snippet from src/model/Kitten.js:
// const mongoose = require("mongoose");
// const kittySchema
