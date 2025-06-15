
import { NavLink } from 'react-router';

const NavBar = () => {
    return (
        <>
            <nav className='flex items-center justify-center pt-5 ' id='nav'>
                <div className='h-18 w-300 bg-gray-500  text-black flex items-center justify-evenly rounded-full text-2xl font-bold ' id='nav-bar'>
                    <NavLink
                        className={(e) => e.isActive ? "text-red-600" : ""}
                        to="/"  >Home <i className="ri-arrow-up-s-line"></i> </NavLink>
                    <NavLink
                        className={(e) => e.isActive ? "text-red-600" : ""}
                        to="/product"  >Products <i className="ri-arrow-up-s-line"></i> </NavLink>
                    <NavLink
                        className={(e) => e.isActive ? "text-red-600" : ""}
                        to="/details"  >Product Details <i className="ri-arrow-up-s-line"></i> </NavLink>
                    <NavLink
                        className={(e) => e.isActive ? "text-red-600" : ""}
                        to="/addproduct"  >Add Product <i className="ri-arrow-up-s-line"></i> </NavLink>
                </div>
            </nav>
        </>
    )
}

export default NavBar;