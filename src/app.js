const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./configs/dbConnection");
const errorHandler = require("./middlewares/errorHandler");

connectDB();

// Create express instance
const app = express();

// Vị trí của các middleware quan trọng
app.use(express.json());

app.use("/api/contacts", require("./routes/contactRoutes"));

app.use("/api/users", require("./routes/userRouters"));

// Vị trí của middleware quan trọng
app.use(errorHandler);
module.exports = app;
