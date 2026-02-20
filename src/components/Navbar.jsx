import React, { useContext, useState } from "react";
// import {assets} from "../assets/assets"
import logo from "../assets/logo.webp";
import search from "../assets/search_icon.png";
import profile from "../assets/profile_icon.png";
import menu_icon from "../assets/menu_icon.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import cross from "../assets/cross_icon.png";
import { VehicleContext } from "../context/VehiclesContext";
function Navbar() {
  const [visible, setVisible] = useState(false);
  const navigate=useNavigate()
  const {setShowSearch}=useContext(VehicleContext)

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <img src={logo} alt="" className="w-36 cursor-pointer" onClick={()=>navigate("/")} />

      <div className="flex items-center gap-6">
        <img onClick={()=>setShowSearch(true)}  src={search} alt="" className="w-5 cursor-pointer" />
        <img src={profile} className="w-5 cursor-pointer" alt="" />
        <img
          onClick={() => setVisible(true)}
          src={menu_icon}
          className="w-5 cursor-pointer"
          alt=""
        />
      </div>

      {visible && (
        <div
          onClick={() => setVisible(false)}
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
        ></div>
      )}

      <div
        className={`absolute top-0 right-0 bottom-0 z-150 overflow-hidden bg-white transition-all 
  ${visible ? "w-[80%] md:w-[20%]" : "w-0"}`}
      >
        <div className="flex flex-col text-gray-600 h-full">
          {/* Header with logo + close button */}
          <div className="w-full h-[100px] flex flex-row-reverse border-b">
            <div className="w-[80%] flex items-center justify-center">
              <img src={logo} className="h-[30px]" alt="Mahindra Logo" />
            </div>
            <div
              onClick={() => setVisible(false)}
              className="flex items-center gap-4 p-3 cursor-pointer"
            >
              <img className="h-4 rotate-180" src={cross} alt="Close" />
            </div>
          </div>

          {/* Sidebar menu items */}
          <NavLink
            to="/"
            onClick={() => setVisible(false)}
            className={({ isActive }) =>
              `py-2 pl-6 border cursor-pointer 
     ${isActive ? "bg-red-600 text-white font-semibold" : "text-gray-600"}`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/collection"
            onClick={() => setVisible(false)}
            className={({ isActive }) =>
              `py-2 pl-6 border cursor-pointer 
     ${isActive ? "bg-red-600 text-white font-semibold" : "text-gray-600"}`
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/configure"
            onClick={() => setVisible(false)}
            className={({ isActive }) =>
              `py-2 pl-6 border cursor-pointer 
     ${isActive ? "bg-red-600 text-white font-semibold" : "text-gray-600"}`
            }
          >
            Configure Vehicle
          </NavLink>

          <NavLink
            to="/suggester"
            onClick={() => setVisible(false)}
            className={({ isActive }) =>
              `py-2 pl-6 border cursor-pointer 
     ${isActive ? "bg-red-600 text-white font-semibold" : "text-gray-600"}`
            }
          >
            Vehicle Suggester
          </NavLink>

          <NavLink
            to="/dealer"
            onClick={() => setVisible(false)}
            className={({ isActive }) =>
              `py-2 pl-6 border cursor-pointer 
     ${isActive ? "bg-red-600 text-white font-semibold" : "text-gray-600"}`
            }
          >
            Dealer Locator
          </NavLink>

          <NavLink
            to="/compare"
            onClick={() => setVisible(false)}
            className={({ isActive }) =>
              `py-2 pl-6 border cursor-pointer 
     ${isActive ? "bg-red-600 text-white font-semibold" : "text-gray-600"}`
            }
          >
            Compare Vehicles
          </NavLink>

          <NavLink
            to="/profit"
            onClick={() => setVisible(false)}
            className={({ isActive }) =>
              `py-2 pl-6 border cursor-pointer 
     ${isActive ? "bg-red-600 text-white font-semibold" : "text-gray-600"}`
            }
          >
            Profit Calculator
          </NavLink>

          <NavLink
            to="/emi"
            onClick={() => setVisible(false)}
            className={({ isActive }) =>
              `py-2 pl-6 border cursor-pointer 
     ${isActive ? "bg-red-600 text-white font-semibold" : "text-gray-600"}`
            }
          >
            EMI Calculator
          </NavLink>

          <NavLink
            to="/logout"
            onClick={() => setVisible(false)}
            className={({ isActive }) =>
              `py-2 pl-6 border cursor-pointer 
     ${isActive ? "bg-red-600 text-white font-semibold" : "text-gray-600"}`
            }
          >
            Logout
          </NavLink>

          {/* Footer branding */}
          <div className="mt-auto p-4 text-center text-sm text-gray-500 border-t">
            Mahindra Version 2.0 • 2026
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
