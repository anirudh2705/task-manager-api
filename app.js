const connectDb = require('./db/connect')
const express = require ('express')
const taskRouter =require('./routers/taskRouter')
require('dotenv').config()

const app = express()

app.use(express.json())

app.use('/api/v1/tasks', taskRouter)

const port = process.env.PORT

const start = async() => {
    try {
        await connectDb(process.env.MONGO_URI)
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${port}`)
        })
        
    } catch (error) {
        console.log('error')
    }
}

start()

