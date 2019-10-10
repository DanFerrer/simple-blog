import mongoose from 'mongoose'
require('dotenv').config()

const dbUrl = process.env.DB_URL;
const dbOptions = {
    useNewUrlParser: true,
    useFindAndModify: false
}

mongoose.connect(dbUrl, dbOptions)
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
export default db;