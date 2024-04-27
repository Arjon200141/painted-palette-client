import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Layouts/Home";
import Register from "../Layouts/Register";
import LogIn from "../Layouts/LogIn";
import CardDetails from "../Cards/CardDetails";
import ErrorPage from "../ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import AllCrafts from "../Layouts/AllCrafts";
import AddCrafts from "../Layouts/AddCrafts";
import Craftlist from "../Layouts/Craftlist";


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
                path: "/allcraft",
                element: <AllCrafts></AllCrafts>,
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
                path: "/addcraft",
                element: <PrivateRoute><AddCrafts></AddCrafts></PrivateRoute>,
            },
            {
                path: "/artscraftlist",
                element: <PrivateRoute><Craftlist></Craftlist></PrivateRoute>,
            },
            
        ]
    }
])

export default router;