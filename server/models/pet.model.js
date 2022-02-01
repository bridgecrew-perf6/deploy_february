// import mongoose
const mongoose = require('mongoose')
// var uniqueValidator = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [3, "Pet name must be at least 3 characters!"],
        required: [true, "Pet name is required!"],
        unique: true
    },
    type: {
        type: String,
        minlength: [3, "Pet Type must be at least 3 characters!"],
        required: [true, "Pet type is required!"]
    },
    description: {
        type: String,
        minlength: [3, "Description must be at least 3 characters!"],
        required: [true, "Description is required"]
    },
    skill1: {
        type: String
    },
    skill2: {
        type: String
    },
    skill3: {
        type: String
    },
    likes: {
        type: Number
    }
})





const Pet = mongoose.model('Pets', PetSchema) //change Name, tableName and NameSchema for each project
//mongoose creates a table named ___ using instructions for ____ above

// PetSchema.plugin(uniqueValidator);
module.exports = Pet //change Name for each project