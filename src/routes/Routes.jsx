import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import AddBook from "../pages/Admin/AddBook";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import MyBooks from "../pages/MyBooks/MyBooks";
import ManageBooks from "../pages/Admin/ManageBooks";

export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage />,
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/my-books",
                element: <PrivateRoute>
                    <MyBooks />
                </PrivateRoute>,
            },
            {
                path: "/add-book",
                element: <PrivateRoute><AddBook /></PrivateRoute>,
            },
            {
                path: "/manage-books",
                element: <PrivateRoute><ManageBooks /></PrivateRoute>,
            },
        ]
    },
    { path: '/login', element: <Login /> },
    { path: '/signup', element: <SignUp /> },
]);