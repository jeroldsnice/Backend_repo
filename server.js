const express = require("express");
const app = express();

// Middleware that parses HTTP requests with JSON body
app.use(express.json());
app.use(express.static("public"));



app.listen(3000);