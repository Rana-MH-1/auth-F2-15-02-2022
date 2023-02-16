const mongoose = require('mongoose')
require('dotenv').config()

mongoose.set('strictQuery', true)
exports.connectDB = ()=>{
  mongoose.connect(process.env.MONGO_URI, err=> err? console.log(err) : console.log('DB is connected...!'))
}