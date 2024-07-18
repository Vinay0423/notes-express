import express from 'express'
import dotenv from 'dotenv'
import {db} from './config/db.js'


dotenv.config()
db()

let app= express()



export default app;