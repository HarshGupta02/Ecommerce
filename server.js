const app = require("./app.js");
const dotenv = require("dotenv");
const cloudinary = require("cloudinary");
// const connectDatabase = require("../backend/config/database");
const connectDatabase = require("./database.js");

process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to uncaught exception`);
    process.exit(1);
})

// dotenv.config({path : "backend/config/config.env"});
dotenv.config({path : "./config.env"});

connectDatabase();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is Working on http://localhost:${process.env.PORT}`)
});

process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to unhandeled Promise Rejection`);
    server.close(() => {
        process.exit(1);
    });
});