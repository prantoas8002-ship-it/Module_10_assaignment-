const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');



const app = express();
app.use(express.json());
app.use(cors());

async function connectToDatabase() {
    try {
        const URI = process.env.MONGO_URI;
        await mongoose.connect(URI);
        console.log("connected to database...");
    } catch (error) {
        console.log("error connecting to database...")
    }
}

app.use('/api', require('./route'));

app.listen(5000, async () => {
    await connectToDatabase();
    console.log("server is running at port 5000...");
})

