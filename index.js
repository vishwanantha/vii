import express from 'express'
import route from './src/route/index.js'
import cors from 'cors'
import cokkie from 'cookie-parser'


const app=express()
app.use(express.json())
app.use(cors())

app.use('/',route)

app.use(cokkie())
const PORT=process.env.PORT
app.listen(PORT,()=>{console.log(`server ${PORT}`)})