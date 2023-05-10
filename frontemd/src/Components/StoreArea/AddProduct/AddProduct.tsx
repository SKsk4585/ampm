import { useForm } from "react-hook-form";
import AmpmCategoryModel from "../../../3-models/ampmCategoryModel";
import AmpmStoreModel from "../../../3-models/ampmStoreModel";
import ampmSrvice from "../../../4-service/ampmService";



function AddProduct(): JSX.Element {
    const {register,handleSubmit} = useForm<AmpmStoreModel>()
    const send = (productInfo:AmpmStoreModel)=>{
        ampmSrvice.addProduct(productInfo)
        .then(()=>{
            alert("yes!!!!! added book")
        })
        .catch((err)=>{
            console.log(err)

        })
        
    }
    return (
        <div className="AddProduct">
			<form onSubmit={handleSubmit(send)}>
                <input type="text" placeholder="product name"{...register("productName")}/>
                <input type="text" placeholder="time of reation"{...register("timeOfReation")}/>
                <input type="text" placeholder="time of expiration"{...register("timeOfExpiration")}/>
                <input type="text" placeholder="price"{...register("price")}/>


                <button>ADD</button>

            
            </form>


        </div>
    );
}

export default AddProduct;

