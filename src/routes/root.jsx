import Sidebar from "../components/sidebar";
import { Outlet } from "react-router-dom";
    
function Root() {
    return (
        <>
            <link rel="stylesheet" type="text/css" href="/assets/css/style.css"></link>
            <Sidebar />
            <div id="pageContainer" className="ml-10">
                <Outlet />
            </div>
        </>
    )
}

export default Root;