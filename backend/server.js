
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

 connectDatabase()