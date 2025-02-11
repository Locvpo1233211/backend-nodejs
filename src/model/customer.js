const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema(
    {
        name: { String, required: true },
        address: String,
        phone: String,
        email: String,
        image: String,
        description: String,
    },
    {
        timestamps: true,
    }
);
const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
// Compare this snippet from src/model/Kitten.js:
// const mongoose = require("mongoose");
// const kittySchema
