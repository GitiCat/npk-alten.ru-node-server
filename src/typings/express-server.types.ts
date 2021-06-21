type ExpressServerTypes = {
    host?: string,
    port?: number,
    middleWares: Array<ExpressServerMiddlewaresTypes>,
    controllers: Array<ExpressServerControllersTypes>
}

type ExpressServerControllersTypes = {

}

type ExpressServerMiddlewaresTypes = {
    
}

export {
    ExpressServerTypes,
    ExpressServerControllersTypes,
    ExpressServerMiddlewaresTypes
}