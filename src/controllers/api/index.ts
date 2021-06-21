import { Router } from 'express'
import { Request, Response } from 'express'
import IControllerBase from '../../interfaces/IControllerBase'

class RootApiController implements IControllerBase {
    public path: string = '/api'
    public router: Router = null

    constructor() {
        
    }

    public initRoutes() {

    }
}