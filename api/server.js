const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();

const port = 5000;

dotenv.config();

const categoryRoute = require('./routes/categories.js');
const productRoute = require('./routes/products.js');
const billRoute = require('./routes/bills.js');

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to mongoDB");
    } catch (error) {
        throw error;
    }
}

app.use(express.json())
app.use(cors());

app.use('/api/categories',categoryRoute);
app.use('/api/products',productRoute);
app.use('/api/bills',billRoute);

app.get('/',(req,res)=>{
    res.send("Hello World!")
})

app.listen(port,()=>{
    connect();
    console.log(`Example app listening on port ${port}`);
});