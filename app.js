require("dotenv").config();
const express = require("express");
const cors = require('cors');
const path = require("path");
const cookieParser = require('cookie-parser');
const corsOptions = require('./config/corsOptions')
const { logger } = require('./middlewares/logEvents')
const errorHandler = require('./middlewares/errorHandler')


// import routes
const userRoutes = require('./routes/userRoutes');

//express app
const app = express();

//custom middleware
app.use(cors(corsOptions));

// using the custom-written request logging middleware by Dave Gray
app.use(logger);

//built-in middleware
app.use(express.json());
app.use(cookieParser());

// register view engine
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

//To be able to parse the form data we can add an optional middleware from express as below.
app.use(express.urlencoded({ extended: true }));


//routes
app.get("^/$|/index(.html)?", (req, res) => {
    res.render("index", { title: "Homepage" });
});

app.use("/usersData(.html)?", userRoutes);

app.use((req, res) => {
    res.status(404).render("404", { title: "404" });
});

app.use(errorHandler)

module.exports = app;