const connectDb = require('./db/connect')
const express = require ('express')
const taskRouter =require('./routers/taskRouter')
const notFound = require('./middleware/notFound')
const errorHandler = require('./middleware/errorHandler')
require('dotenv').config()

const app = express()

//middleware
app.use(express.static('./public'))
app.use(express.json())

//routes
app.use('/api/v1/tasks', taskRouter)

app.use(notFound)
app.use(errorHandler) 

const port = process.env.PORT || 3000

const start = async() => {
    try {
        await connectDb(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`)
        })
        
    } catch (error) {
        console.log('error')
    }
}

start()

