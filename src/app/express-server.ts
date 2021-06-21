import path from 'path'
import express from 'express'
import { Application } from 'express'
import { ExpressServerTypes } from '../typings/express-server.types'

class ExpressServer {
    private _app: Application = null
    private _host: string = 'localhost'
    private _port: number = 3000

    constructor({ host, port, middleWares, controllers }: ExpressServerTypes) {
        this._app = express()
        this._host = host!
        this._port = port!

        this.middlewares(middleWares)
        this.routes(controllers)
        this.assets()
    }

    public get App(): Application {
        return this._app
    }

    private middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void; }) {
        middleWares.forEach(middleWare => {
            this._app.use(middleWare)
        })
    }

    private routes(controllers: { forEach: (arg0: (controller: any) => void) => void; }) {
        controllers.forEach(controller => {
            this._app.use('/', controller.route)
        })
    }

    private assets() {
        this._app.use(express.static(path.resolve(__dirname, '..', 'static')))
    }

    public listen() {
        this._app.listen(this._port, this._host, () => {
            console.log(`App listening on the ${this._host}:${this._port}`)
        })
    }
}

export default ExpressServer