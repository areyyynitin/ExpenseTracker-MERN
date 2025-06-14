require("dotenv").config();
const express = require("express")
const cors = require("cors")
const path = require("path")
const connectDB = require("./config/db")

const app = express()

// MiddleWare to handle Cors
app.use(
    cors({
        origin: process.env.CLIENT_URL || "*",
        methods:["GET","POST","PUT","DELETE"],
        allowedHeaders:["Content-Type" ,"Authorization"],
    })
);

// node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
app.use(express.json());

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT,() => console.log(`Server running on port ${PORT}`))