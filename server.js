const path = require('path');
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");


const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Allow static files to be rendered
app.use(express.static("public"));


//Connect to MongoDB atlas if available, if not connect locaally to db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology:true,
  useFindAndModify: false,
});


//Importing Routes
app.use(require('./routes/apiRoutes.js'));
app.use(require('./routes/htmlroutes.js'));


app.listen(PORT, function(){
    console.log(`App listening on Port ${PORT}!`);
});

