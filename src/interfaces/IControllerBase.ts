import { Router } from 'express'

interface IControllerBase {
    path: string,
    router: Router,
    initRoutes: Function
}

export default IControllerBase