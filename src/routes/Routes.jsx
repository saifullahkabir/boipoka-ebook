import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import AddBook from "../pages/Admin/AddBook";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
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