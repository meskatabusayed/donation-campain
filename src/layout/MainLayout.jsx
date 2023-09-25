import { Outlet } from "react-router-dom";
import Navber from "../components/Header/Navber/Navber";




const MainLayout = () => {
    return (
        <div className="max-w-[1340] mx-auto">
            <Navber></Navber>
            <div>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;