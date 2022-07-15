require('dotenv').config()
const mongoose = require('mongoose')

async function dbConnect() {
    mongoose
        .connect(
            process.env.DB_URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        )
        .then(() => {
            console.log("Successfully conected to MongoDB Atlas!");
        })
        .catch((err) => {
            console.log("Unable to connect to MongoDB Atla!");
            console.error(err);
        })
}

module.exports = dbConnect