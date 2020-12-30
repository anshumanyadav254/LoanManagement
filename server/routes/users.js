var express = require('express');
var router = express.Router();
var Customer = require('../models/customer');


router.route('/').get((req, res) => {
  Customer.find((err, value) => {
    if (err) {
      console.log(err);
    } else {
      res.json(value);
    }
  });
})

router.route('/addCustomer').post( function (req, res) {
  var customer = new Customer()
  customer.name = req.body.name;
  customer.address = req.body.address;
  customer.contactNumber = req.body.contactNumber;
  customer.email = req.body.email;
  customer.loanAmount=req.body.loanAmount;
  customer.startDate=req.body.startDate;
  customer.expiryDate=req.body.expiryDate;
  customer.emi=req.body.emi;
  customer.save();
  res.send('succesfully added')
})
module.exports = router;
