import path from 'path'
import dotenv from 'dotenv'
dotenv.config({
    path: path.resolve(__dirname, '..', '.env')
})

import express, { Application } from 'express'
import { json, urlencoded } from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { GraphQLApolloServer } from './graphql/server'

const app: Application = express()
app.use('/static', express.static(path.resolve(__dirname, '..', 'static')))
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(cookieParser()),
app.use(cors())

const host: string = String(process.env.SERVER_HOST),
      port: number = Number(process.env.SERVER_PORT)

const apolloServer = new GraphQLApolloServer(app)
apolloServer.create()

app.listen(port, host, () => {
    console.log(`Server ready at ${host}:${port}&${apolloServer.server}`)
})