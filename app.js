const express = require('express');
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const mysql = require("mysql");

require('dotenv').config();

const app = express();

const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//static files
app.use(express.static("public"));

//Template Engine
const handlebars = exphbs.create({extname:".hbs"});
app.engine('hbs', handlebars.engine);
app.set("view engine","hbs");

//Routes
const routes = require("./server/routes/students")
app.use('/',routes);

//Listen port
app.listen(port, ()=>{
    console.log(`Server running on the port ${port}`);
});