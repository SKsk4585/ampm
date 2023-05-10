import { Route, Routes } from "react-router-dom";
import "./Routing.css";
import StoreList from "../../StoreArea/StoreList/StoreList";
import AddProduct from "../../StoreArea/AddProduct/AddProduct";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			routing
            <Routes>
                <Route path="/am-pm-store" element={<StoreList/>}/>
                <Route path="/addProduct" element={<AddProduct/>}/>
                
            </Routes>
        </div>
    );
}

export default Routing;

