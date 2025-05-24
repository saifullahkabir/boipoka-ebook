import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import AddBook from "../pages/Admin/AddBook";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

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
]);