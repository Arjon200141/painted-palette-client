import { Link, NavLink ,useNavigate } from "react-router-dom";
import { useContext, useState, } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { ToastContainer, toast } from 'react-toastify';

const NavBar = () => {
    const navlinkStyles = ({ isActive }) => {
        return {
            border: isActive ? "2px solid #23BE0A" : "2px solid white",
            backgroundColor: isActive ? "none" : "white",
            color: isActive ? "#23BE0A" : "black",
            fontWeight: isActive ? "bold" : "normal"
        };
    };

    const navigate = useNavigate();

    const { user, logOut } = useContext(AuthContext);
    const [showName, setShowName] = useState(false);


    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
            navigate("/")
        toast.success("Sign Out!!!");
        
    }

    const links = <>
        <li> <NavLink to="/" style={navlinkStyles}>Home</NavLink></li>
        <li><NavLink to="/allcraft" style={navlinkStyles}>All Art & craft Items</NavLink></li>
        <li><NavLink to="/addcraft" style={navlinkStyles}>Add Craft Item</NavLink></li>
        <li><NavLink to="/artscraftlist" style={navlinkStyles}>My Art&Craft List</NavLink></li>
    </>


    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content gap-8 text-xl font-medium mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <Link to="/">
                        <a className="btn btn-ghost text-3xl">Painted <span className="text-red-500">Palette</span></a>
                    </Link>
                </div>

                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1 gap-1 text-xl font-medium">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-3">

                    {
                        user ?
                            <div className="flex items-center gap-3">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn btn-ghost btn-circle avatar"
                                    onMouseEnter={() => setShowName(true)}
                                    onMouseLeave={() => setShowName(false)}
                                >
                                    <div className=" rounded-full">
                                        <img alt="Profile" src={user.photoURL||"https://i.ibb.co/dDx1cfY/user.png" } />
                                    </div>
                                    {showName && <div className="absolute top-2 right-14 bg-emerald-100 shadow-md p-2 rounded-lg font-medium">{user.displayName || "Name not Found"}</div>}
                                </div>
                                <button className="btn bg-amber-200 text-xl font-medium px-6" onClick={handleSignOut}>Sign Out</button>
                                <ToastContainer />
                            </div> :
                            <div className="flex gap-6">
                                <Link to="/register">
                                    <button className="btn bg-amber-200 text-xl font-medium px-6">Register</button>
                                </Link>
                                <Link to="/login">
                                    <button className="btn bg-lime-200 text-xl font-medium px-6">Sign In</button>
                                </Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;