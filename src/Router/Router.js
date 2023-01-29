import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import LoginForm from "../Pages/Athentication/Login/LoginForm";
import RegistrationForm from "../Pages/Athentication/Registration/RegistrationForm";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Table from "../Pages/Table/Table";
import PrivetRoutes from "./PrivetRoutes";

export const router = createBrowserRouter([
   {
    path: "/",
    element: <MainLayout/>,
    errorElement: <ErrorPage/>,
    children :[
        {
            path: "/",
            element : <PrivetRoutes><Table/></PrivetRoutes>
        },
        {
            path:"login",
            element : <LoginForm/>
        },
        {
            path: "register",
            element:<RegistrationForm/>
            
        }

    ]
   }
])