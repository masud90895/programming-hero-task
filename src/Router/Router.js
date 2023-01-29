import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Table from "../Pages/Table/Table";

export const router = createBrowserRouter([
   {
    path: "/",
    element: <MainLayout/>,
    errorElement: <ErrorPage/>,
    children :[
        {
            path: "/",
            element : <Table/>
        },

    ]
   }
])