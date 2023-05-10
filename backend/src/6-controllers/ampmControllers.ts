import express, { NextFunction, Request, Response, response } from "express"
//import { request } from "http"
import ampmLogic from "../5-logic/ampmLogic"
import AmpmStoreModel from "../4-models/ampmStoreModel"

const router = express.Router()

//get all store
router.get("/ampm-get-all-store", async(request:Request, response:Response,next:NextFunction)=>{
    try {
        const ampm = await ampmLogic.getaAllAmpmStore()
        response.json(ampm)
        
    } 
    catch (error) {
        next(error)
        
    }
})

//get all category
router.get("/ampm-get-all-category", async(request:Request, response:Response,next:NextFunction)=>{
    try {
        const ampm = await ampmLogic.getaAllCategory()
        response.json(ampm)
        
    } 
    catch (error) {
        next(error)
        
    }
})

//get all store by category model
router.get("/get-all-store-by-category-id/:categoryId", async(request:Request, response:Response,next:NextFunction)=>{
    try {
        const categoryId = +request.params.categoryId
        const ampm = await ampmLogic.getaAllCategoryByCategoryId(categoryId)
        response.json(ampm)
        
    } 
    catch (error) {
        next(error)
        
    }
})

//add book
router.post("/add-product", async(request:Request,response:Response,next:NextFunction)=>{
    try {
       const product = new AmpmStoreModel(request.body)
       const addedProduct = await ampmLogic.addProduct(product)
       response.status(201).json(addedProduct)
    } 
    catch (error) {
        next(error)
        
    }
})


//delete
router.delete("/delete-product/:ampmId", async(request:Request,response:Response,next:NextFunction)=>{
    try {
       const ampmId = +request.params.ampmId
       await ampmLogic.deleteProduct(ampmId)
       response.sendStatus(204)
    } 
    catch (error: any) {
        next(error)
        
    }
})




export default router