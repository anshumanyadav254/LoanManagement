const express = require('express');
const app = express();
const mongoose = require('mongoose');
const values = require('./routes/users');

mongoose.connect('mongodb+srv://anshu:anshu@cluster0.17jj2.mongodb.net/demo?retryWrites=true&w=majority',() =>{
    console.log('database connected')
});

app.use(express.json());
app.use('/api', values);


const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server Listening on ${port}`)
});
