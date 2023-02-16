const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const userRouter = require('./Routes/UserRoute')
const { connectDB } = require('./Config/ConnectDB')
const { Validation } = require('./Middlewares/Validation')

connectDB()

app.use(express.json())
app.use('/api/users', Validation,userRouter)


const PORT = process.env.PORT || 7000;
app.listen(PORT, err=> err? console.log(err) : console.log(`Server is running on ${PORT}`))
