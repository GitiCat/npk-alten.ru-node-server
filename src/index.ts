import path from 'path'
import dotenv from 'dotenv'
dotenv.config({
    path: path.resolve(__dirname, '..', '.env')
})

import { json, urlencoded } from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import ExpressServer from './app/express-server'
import "./database/models/index.ts"

const host: string = String(process.env.SERVER_HOST),
      port: number = Number(process.env.SERVER_PORT)


const expressServer = new ExpressServer({
    host: host,
    port: port,
    controllers: [],
    middleWares: [
        json(),
        urlencoded({ extended: true }),
        cookieParser(),
        cors()
    ]
})

expressServer.listen()