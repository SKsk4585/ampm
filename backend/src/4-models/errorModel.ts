export class ErrorModel{
    public constructor (public status:number, public msg:string){}
}

export class routNotFoundErrorModel extends ErrorModel{
    public constructor (route:string){
        super(404, `the ${route}is not exsist`)
    }
}

export class resonceNotFoundErrorModel extends ErrorModel{
    public constructor (id:string){
        super(404, `the ${id}is not exsist`)
    }
}