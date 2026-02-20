import { createContext, useState } from "react";
import { productData } from "../assets/assets";

export const VehicleContext=createContext();


const VehicleContextProvider=(props)=>{
        const [search,setSearch]=useState('');
        const [showSearch,setShowSearch]=useState(false)
        const value={
            productData,
            search,setSearch,showSearch,setShowSearch
        }

        return(
            <VehicleContext.Provider value={value}>
                {props.children}
            </VehicleContext.Provider>
        )
}


export default VehicleContextProvider