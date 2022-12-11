import {NextFunction, Request, Response} from "express";

declare module 'express' {
    interface Request<P,ResBody,ReqBody,ReqQuery,Locals>{
        body:ReqBody
        params:ReqQuery
    }
    interface Response<ResBody = any,Locals extends Record<string, any> = Record<string, any>,StatusCode extends number = number>{
        status(code: StatusCode): this;
        json: (res:ResBody)=>any;
    }
}

declare global {
    type IControlFn<Tbody = any,Tparams = any> = (req:Request<never,never,Tbody,Tparams>,res:Response,next:NextFunction)=>Promise<void>

}

export {};
