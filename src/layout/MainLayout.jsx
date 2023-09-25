import { Outlet } from "react-router-dom";
import Navber from "../components/Header/Navber/Navber";




const MainLayout = () => {
    return (
        <div className="max-w-[1340] mx-auto">
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;