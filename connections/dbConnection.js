require("dotenv").config();
const mongoose = require('mongoose');
const usersDbName = require('../config/databasesInfo')

const MONGO_URI = `${process.env.MONGO_URI}`;
const URI_DB = `${MONGO_URI}${usersDbName}`;
const connectDB = mongoose.createConnection(URI_DB, { useNewUrlParser: true, useUnifiedTopology: true })
connectDB.once('connected', () => {
    console.log(`connected to database ${usersDbName}`)
})
connectDB.on('error', error => {
    console.log(error)
})
module.exports = connectDB;