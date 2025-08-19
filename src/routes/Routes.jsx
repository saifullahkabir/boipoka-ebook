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
import UpdateBook from "../pages/Admin/UpdateBook";
import ManageUsers from "../pages/Admin/ManageUsers";
import AdminRoute from "./AdminRoute";
import AllBooks from "../pages/AllBooks/AllBooks";

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
                path: "/all-books",
                element: <PrivateRoute>
                    <AllBooks />
                </PrivateRoute>,
            },
            {
                path: "/my-books",
                element: <PrivateRoute>
                    <MyBooks />
                </PrivateRoute>,
            },
            {
                path: "/add-book",
                element: <PrivateRoute>
                    <AdminRoute>
                        <AddBook />
                    </AdminRoute>
                </PrivateRoute>,
            },
            {
                path: "/manage-books",
                element: <PrivateRoute>
                    <AdminRoute>
                        <ManageBooks />
                    </AdminRoute>
                </PrivateRoute>,
            },
            {
                path: "/update-book/:id",
                element: <PrivateRoute>
                    <AdminRoute>
                        <UpdateBook />
                    </AdminRoute>
                </PrivateRoute>,
            },
            {
                path: "/manage-users",
                element: <PrivateRoute>
                    <AdminRoute>
                        <ManageUsers />
                    </AdminRoute>
                </PrivateRoute>,
            },
        ]
    },
    { path: '/login', element: <Login /> },
    { path: '/signup', element: <SignUp /> },
]);