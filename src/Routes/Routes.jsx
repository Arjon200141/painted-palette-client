import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Layouts/Home";
import Register from "../Layouts/Register";
import LogIn from "../Layouts/LogIn";
import ErrorPage from "../ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import AllCrafts from "../Layouts/AllCrafts";
import AddCrafts from "../Layouts/AddCrafts";
import Craftlist from "../Layouts/Craftlist";
import CardDetails from "../Cards/CardDetails";
import Categories from "../Layouts/Categories";
import UpdateProfile from "../Layouts/AddCrafts";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=>fetch('https://painted-palette-server.vercel.app/paintings'),
            },
            {
                path: "/allcraft",
                element: <AllCrafts></AllCrafts>,
                loader: ()=>fetch('https://painted-palette-server.vercel.app/paintings'),
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
                path: "/addcraft",
                element: <PrivateRoute><AddCrafts></AddCrafts></PrivateRoute>,
            },
            {
                path: "/artscraftlist",
                element: <PrivateRoute><Craftlist></Craftlist></PrivateRoute>,
                loader: ()=>fetch('https://painted-palette-server.vercel.app/paintings'),
            },
            {
                path: "/cards/:cardId",
                element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
                loader: ({ params }) =>fetch(`https://painted-palette-server.vercel.app/paintings/${params.cardId}`),
            },
            {
                path: "/subcategory/:sub",
                element: <PrivateRoute><Categories></Categories></PrivateRoute>,
                loader: ({ params }) =>fetch(`https://painted-palette-server.vercel.app/subcategory/${params.sub}`),
            },
            {
                path: "/updateinfo/:id",
                element: <PrivateRoute><AddCrafts></AddCrafts></PrivateRoute>,
                loader: ({ params }) =>fetch(`https://painted-palette-server.vercel.app/subcategory/${params.id}`),
            },

        ]
    }
])

export default router;