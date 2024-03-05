const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const sessio = require("express-session");
const path = require("path");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const { error } = require("console");
const port = process.env.PORT || 8000;

const app = express();

// console.log(process.env.DBURl)

// middlewares 
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set("views",path.join(__dirname,"views"));


app.get("/", (req, res) => {
  res.send("Welcome To WiseLogics Server ");
});

const start = async () => {
  try {
    // await connnectDb(dbURL)
    app.listen(5000, () => {
      console.log("server running on port 5000");
    });
  } catch (error) {
    console.log(`server connection Error ${error}`);
  }
};

start()