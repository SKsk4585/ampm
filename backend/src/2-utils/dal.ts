import mysql from "mysql"
import appConfig from "./appconfig"


const conection = mysql.createPool({
    host:appConfig.host,
    user:appConfig.user,
    password:appConfig.password,
    database:appConfig.database
})

function execute(sql:string): Promise<any>{
    return new Promise<any>((resolve,reject)=>{
        conection.query(sql,((err,resoulte)=>{
            if(err){
                reject (err)
                return
            }
            resolve (resoulte)
        }))
    })
}

export default {
    execute
}