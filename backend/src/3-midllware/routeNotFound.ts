import { NextFunction, Request, Response } from "express";
import { routNotFoundErrorModel } from "../4-models/errorModel";



function routeNotFound(request:Request,response:Response, next:NextFunction){
    const err = new routNotFoundErrorModel(request.originalUrl)
    next(err)
}

export default routeNotFound