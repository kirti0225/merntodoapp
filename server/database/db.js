const mongoose = require( 'mongoose');
const dotenv = require( 'dotenv');

dotenv.config();

// const USERNAME = process.env.DB_USERNAME;
// const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {

    const MONGODB_URI = "mongodb+srv://kirti:kirti7007@cluster0.adgl96o.mongodb.net/todolists?retryWrites=true&w=majority";

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database ', error.message);
    })
}

module.exports = Connection;