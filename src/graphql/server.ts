import { ApolloServer } from 'apollo-server-express'
import { Application } from 'express'

export class GraphQLApolloServer {
    private _app: Application = null
    private _server: ApolloServer = null

    constructor(app: Application) {
        this._app = app
    }

    create() {
        this._server = new ApolloServer({
            playground: true
        })

        this._server.applyMiddleware({ app: this._app })
    }

    get server() {
        return this._server
    }
}