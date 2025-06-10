import React from 'react'
import { NavLink } from 'react-router';

const NavBar = () => {
    return (
        <>
            <nav className='h-18 w-full bg-black text-white flex items-center justify-evenly text-3xl font-bold' >
                <NavLink
                className={(e)=>e.isActive? "text-red-900" : ""}
                to="/"  >Home</NavLink>
                <NavLink
                className={(e)=>e.isActive? "text-red-900" : ""}
                to="/productdetails"  >Product Details</NavLink>
                <NavLink
                className={(e)=>e.isActive? "text-red-900" : ""}
                 to="/addproduct"  >Add Product</NavLink>
            </nav>
        </>
    )
}

export default NavBar;