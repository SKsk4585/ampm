import express, { NextFunction, Request, Response, response } from "express"
//import { request } from "http"
import ampmLogic from "../5-logic/ampmLogic"

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

// //get all books
// router.get("/get-all-books", async(request:Request, response:Response,next:NextFunction)=>{
//     try {
//         const books = await booksLogic.getaAllBooks()
//         response.json(books)
        
//     } 
//     catch (error) {
//         next(error)
        
//     }
// })

// //add book
// router.post("/books", async(request:Request,response:Response,next:NextFunction)=>{
//     try {
//        const bookstorproduct = new BookModel(request.body)
//        const addedBook = await booksLogic.addBook(bookstorproduct)
//        response.status(201).json(addedBook)
//     } 
//     catch (error) {
//         next(error)
        
//     }
// })


// //delete
// router.delete("/delete-books/:bookId", async(request:Request,response:Response,next:NextFunction)=>{
//     try {
//        const bookId = +request.params.bookId
//        await booksLogic.deleteBook(bookId)
//        response.sendStatus(204)
//     } 
//     catch (error: any) {
//         next(error)
        
//     }
// })




export default router