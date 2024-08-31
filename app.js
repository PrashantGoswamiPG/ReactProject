import React from "react";
import ReactDOM from "react-dom/client"
import Heading from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import {BrowserRouter, createBrowserRouter,Outlet,RouterProvider} from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
//functional component





const Applayout=()=>{
    return (
        <div>
            <Heading/>
            {/* <Body/> */}
            <Outlet/>
        </div>
    )
}

const approuter=createBrowserRouter([
    {
        path:"/",
        element:<Applayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/restaurant/:id",
                element:<RestaurantMenu/>
            }
        ],
        errorElement:<Error/>,
    }
    
])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);