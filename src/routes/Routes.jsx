import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import AddBook from "../pages/Admin/AddBook";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

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
                path: "/add-book",
                element: <AddBook />,
            },
        ]
    },
    { path: '/login', element: <Login /> },
    { path: '/signup', element: <SignUp /> },
]);