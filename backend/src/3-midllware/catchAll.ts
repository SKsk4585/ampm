import { NextFunction, Request, Response } from "express";



function catchAll(err:any,request:Request, response:Response,next:NextFunction){
    console.log(err)
    response.status(err.status || 500).send(err.msg)

}

export default catchAll