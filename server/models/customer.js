const mongoose = require('mongoose');
const Schema  = mongoose.Schema;


const customer = new Schema({
    name: String,
    address:String,
    contactNumber: Number,
    email: String,
    loanAmount: Number,
    startDate:String,
    expiryDate:String,
    emi:Number,

}, {
    collection: 'customers',
})
module.exports = mongoose.model('customer', customer);