import { Route, Routes } from "react-router-dom";
import "./Routing.css";
import StoreList from "../../StoreArea/StoreList/StoreList";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			routing
            <Routes>
                <Route path="/am-pm-store" element={<StoreList/>}/>
               
                
            </Routes>
        </div>
    );
}

export default Routing;

