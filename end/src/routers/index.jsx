import { createBrowserRouter, redirect } from "react-router-dom";
import Login from '../views/Login'
import BaseLayout from '../views/BaseLayout'
import Home from '../views/Home'
import ProductsForm from '../views/ProductsForm'
import Detail from "../views/Detail";
const url = 'https://phase2-aio.vercel.app'

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login url={url} />,
        loader: () => {
            if (localStorage.token) {
                return redirect('/')
            }

            return null
        }
    },
    {
        element: <BaseLayout />,
        loader: () => {
            if (!localStorage.token) {
                return redirect('/login')
            }

            return null
        },
        children: [
            {
                path: "/",
                element: <Home url={url} />,
            },
            {
                path: "/add",
                element: <ProductsForm url={url} />,
            },
            {
                path: "/detail/:id",
                element: <Detail url={url} />,
            },
        ]
    },
])

export default router