const mongoose = require('mongoose');

const addresSchema = new mongoose.Schema({
    unit: Number,
    street: String,
    city: String,
})

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    address: addresSchema,
})

module.export = mongoose.model("Users", userSchema);
