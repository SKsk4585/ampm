// import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import AmpmCategoryModel from "../4-models/ampmCategoryModel";
import AmpmStoreModel from "../4-models/ampmStoreModel";




async function getaAllAmpmStore():Promise<AmpmStoreModel[]>{
    const sql = `SELECT * FROM ampmstore `
    const ampm = await dal.execute(sql)
    return ampm
}

async function getaAllCategory():Promise<AmpmCategoryModel[]>{
    const sql = `SELECT * FROM ampmcategory `
    const ampm = await dal.execute(sql)
    return ampm
}

async function getaAllCategoryByCategoryId (categoryId:number):Promise<AmpmStoreModel[]>{
    const sql = `SELECT A.*, C.categoryName
                 FROM ampmstore AS A JOIN ampmcategory AS C
                 ON A.categoryId = C.categoryId
                 WHERW A.categoryId = ${categoryId}`
    const ampm = await dal.execute(sql)
    return ampm
}



// async function addBook(bookstorproduct:BookModel):Promise<BookModel>{
//     const sql = `INSERT INTO booksstorproducts
//                 VALUES(DEFAULT,
//                         ${bookstorproduct.genreId},
//                         "${bookstorproduct.bookName}",
//                         "${bookstorproduct.summary}",
//                         "${bookstorproduct.price}",
//                         ${bookstorproduct.stock}                       
                        
//                         )`
//     const info:OkPacket = await dal.execute(sql)
//     bookstorproduct.bookId = info.insertId
//     return bookstorproduct
// }


// async function deleteBook(bookId: number):Promise<void>{
//     const sql = `DELETE FROM booksstorproducts
//                  WHERE bookId = ${bookId}`;
                                
//     // const info:OkPacket = await dal.execute(sq+



export default {
    getaAllAmpmStore,
    getaAllCategory,
    getaAllCategoryByCategoryId
    // deleteBook
}