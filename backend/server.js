
const express =  require('express')
const http  =  require('http')
const socketIo = require('socket.io')
const cors  = require('cors')
const jwt = require('jsonwebtoken')

const dotenv  = require('dotenv')
const { connect } = require('http')
const connectDatabase = require('./config/connection')

const app  =  express()

const server  =  http.createServer(app)

 dotenv.config()
// sockeit io

const io = socketIo(server,{
    cors:{
        origin:process.env.CLIENT_URL,
    methods:["GET","POST"],
    credentials:true
    }
})
 connectDatabase()

 app.use(cors())
 app.use(express.json())