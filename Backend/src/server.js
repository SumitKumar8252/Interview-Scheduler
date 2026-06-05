const dotenv= require('dotenv')
const express= require('express')

dotenv.config()

const app= express()

app.use(express.json())


const PORT= process.env.PORT

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})