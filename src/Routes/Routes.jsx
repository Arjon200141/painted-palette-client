import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Layouts/Home";
import Cart from "../Layouts/Cart";
import Register from "../Layouts/Register";
import LogIn from "../Layouts/LogIn";
import CardDetails from "../Cards/CardDetails";
import ErrorPage from "../ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import About from "../Layouts/About";
import UpdateProfile from "../Layouts/UpdateProfile";
import Contact from "../Layouts/Contact";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <LogIn></LogIn>
            },
            {
                path: "/cards/:cardId",
                element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
                loader: () => fetch("residential.json")
            },
            {
                path: "/cart",
                element: <PrivateRoute><Cart></Cart></PrivateRoute>,
                loader: () => (fetch("residential.json"))
            },
            {
                path: "/update",
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
            },
            {
                path: "/contact",
                element: <Contact></Contact>,
            }
        ]
    }
])

export default router;