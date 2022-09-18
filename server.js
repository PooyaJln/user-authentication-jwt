require("dotenv").config();
// const mongoose = require("mongoose");
const app = require('./app');
const { conn: dbConnection } = require('./controllers/userController')
const projPort = process.env.PROJPORT;

//import databses info
// const usersDbName = require('./config/databasesInfo')



// connect to the project database
dbConnection.once('open', () => {
    app.listen(projPort, () => {
        console.log(`Server listening on port ${projPort}`);
    });
})
// const MONGO_URI = `${process.env.MONGO_URI}${usersDbName}`;
// mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         //listen for requests
//         app.listen(projPort, () => {
//             console.log(`connected to db ${usersDbName} & listening on port ${projPort}`);
//         });
//     })
//     .catch((error) => {
//         console.log(error);
//     });

