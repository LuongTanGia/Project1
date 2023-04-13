import { createBrowserRouter, Outlet } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Forgot from "../pages/Forgot";
import ForgotPass from "../pages/Forgot_Pasword";

const AuthLayout = () => {
    return <Outlet />;
};

export default createBrowserRouter([
    {
        element: <AuthLayout />,
        children: [
            {
                element: <Login />,
                path: "/login",
            },
            {
                element: <Forgot />,
                path: "/forgot",
            },
            {
                element: <ForgotPass />,
                path: "/forgot_pass",
            },
            {
                element: <Home />,
                path: "/",
            },
        ],
    },
]);
