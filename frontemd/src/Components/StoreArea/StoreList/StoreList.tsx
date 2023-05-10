import { ChangeEvent, useEffect, useState } from "react";
import "./StoreList.css";
import AmpmStoreModel from "../../../3-models/ampmStoreModel";
import AmpmService from "../../../4-service/ampmService";
import AmpmCategoryModel from "../../../3-models/ampmCategoryModel";
import { Console, error } from "console";
import ampmSrvice from "../../../4-service/ampmService";
import { useNavigate } from "react-router-dom";

function StoreList(): JSX.Element {
    const [Ampm, setAmpm] = useState<AmpmStoreModel[]>([])
    const [category, setCategory] = useState<AmpmCategoryModel[]>([])

    const navigate = useNavigate()
    useEffect(()=>{
        AmpmService.getaAllAmpmStore()
        .then((product)=> {
            setAmpm(product)
            console.log(product)
        })
        .catch(err=>console.log(err))

        AmpmService.getaAllCategory()
            .then(c => setCategory(c))
            .catch(err => console.log(err))
    },[])

    async function getStoreByCategory(event:ChangeEvent<HTMLSelectElement>) {
        try{
            const categoryId = +event.target.value
            const storeByCategory = await AmpmService.getaAllCategoryByCategoryId(categoryId)
            setAmpm(storeByCategory)
        }
        catch (err: any){
            console.log(err)
        }
        
    }

    async function deleteProduce(id:number) {
        try {
            await ampmSrvice.deleteProduct(id)
            alert("wow delete")  
            navigate("/am-pm-store")            
        } 
        catch (error) {
            console.log(error)
        }
        
    }
    return (
        <div className="StoreList">

            <select onChange={getStoreByCategory}>
                {category && category.map(c => <option key={c.categoryId} value={c.categoryId}>{c.categoryName}</option>)}
            </select>
      

                    {Ampm && Ampm.map(p=> <div key={p.ampmId} className="ProductCard">
                                                
                                            <h3>{p.productName}</h3>   
                                            <h5>{p.price}</h5>   
                                            <span>{p.timeOfReation} | {p.timeOfExpiration}</span> 
                                            <button onClick={()=>deleteProduce(p.ampmId)}>Delete</button>  
                                        </div> )}
            
			
        </div>
    );
}

export default StoreList;
