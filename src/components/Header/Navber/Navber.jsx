import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navber = () => {
  return (
    <div>
      <nav className="lg:flex lg:justify-between lg:items-center p-6 ">
        <Logo></Logo>
        <ul className="flex gap-5">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""
              }
            >
             Home
            </NavLink>
            
          </li>

          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""
              }
            >
            Donation
            </NavLink>
            
          </li>

          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""
              }
            >
            Statistics
            </NavLink>
            
          </li>
           
          
        </ul>
      </nav>
    </div>
  );
};

export default Navber;
