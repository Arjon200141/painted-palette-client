import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { ToastContainer, toast } from 'react-toastify';
import { Tooltip as ReactTooltip } from 'react-tooltip';

const NavBar = () => {
    const { pathname } = useLocation();
    const isHome = pathname === '/';

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

    const [theme, setTheme] = useState('light');

    const handleToggle = (e) => {
        const newTheme = e.target.checked ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.querySelector('html').setAttribute('data-theme', newTheme);
    };

    useEffect(() => {
        const localTheme = localStorage.getItem('theme') || 'light';
        setTheme(localTheme);
        document.querySelector('html').setAttribute('data-theme', localTheme);
    }, []);

    const handleSignOut = () => {
        logOut()
            .then(() => {
                navigate("/");
                toast.success("Sign Out!!!");
            })
            .catch((error) => {
                console.error('Sign out error:', error);
            });
    };

    const links = (
        <>
            <li><NavLink to="/" style={navlinkStyles} end>Home</NavLink></li>
            <li><NavLink to="/allcraft" style={navlinkStyles}>All Art & Craft Items</NavLink></li>
            <li><NavLink to="/addcraft" style={navlinkStyles}>Add Craft Item</NavLink></li>
            <li><NavLink to="/artscraftlist" style={navlinkStyles}>My Art & Craft List</NavLink></li>
        </>
    );

    return (
        <div className="">
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content gap-3 text-lg font-medium mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <Link to="/">
                        <a className="btn btn-ghost text-3xl">Painted <span className="text-red-500">Palette</span></a>
                    </Link>
                </div>

                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal gap-1 text-lg font-medium">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-3 font-semibold">
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
                                    <div className="rounded-full">
                                        <img alt="Profile" src={user.photoURL || "https://i.ibb.co/dDx1cfY/user.png"} />
                                    </div>
                                    {showName && <div className="absolute top-2 right-14 bg-emerald-100 shadow-md p-2 rounded-lg font-medium">{user.displayName || "Name not Found"}</div>}
                                </div>
                                <button className="btn bg-amber-200 text-xl font-medium px-6" id="logoutBtn" onClick={handleSignOut}>Log Out</button>
                                <ReactTooltip
                                    anchorId="logoutBtn"
                                    place="top"
                                    variant="warning"
                                    content="Click Here to Log Out!"
                                />
                                <ToastContainer />
                            </div> :
                            <div className="flex gap-4">
                                <Link to="/register">
                                    <button className="btn bg-amber-200 text-xl font-medium px-6" id="regBtn">Register</button>
                                    <ReactTooltip
                                        anchorId="regBtn"
                                        place="top"
                                        variant="success"
                                        content="Click Here to Register!"
                                    />
                                </Link>
                                <Link to="/login">
                                    <button className="btn bg-lime-200 text-xl font-medium px-3" id="loginBtn">Log In</button>
                                    <ReactTooltip
                                        anchorId="loginBtn"
                                        place="top"
                                        variant="info"
                                        content="Click Here to Log In"
                                    />
                                </Link>
                            </div>
                    }
                </div>
                {isHome && (
                    <label className="swap swap-rotate mx-8">
                        <input
                            type="checkbox"
                            className="theme-controller"
                            checked={theme === 'dark'}
                            onChange={handleToggle}
                        />
                        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                    </label>
                )}
            </div>
        </div>
    );
};

export default NavBar;
