import { createBrowserRouter, redirect } from "react-router-dom";
import Login from '../views/Login'
import BaseLayout from '../views/BaseLayout'
import Home from '../views/Home'
import ProductsForm from '../views/ProductsForm'
import Detail from "../views/Detail";
import Toastify from 'toastify-js'
const url = 'https://h8-phase2-gc.vercel.app'

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login url={url} />,
        loader: () => {
            if (localStorage.token) {
                Toastify({
                    text: "You already logged in",
                    duration: 2000,
                    newWindow: true,
                    close: true,
                    gravity: "bottom",
                    position: "right",
                    stopOnFocus: true,
                    style: {
                        background: "#EF4C54",
                        color: "#17202A",
                        boxShadow: "0 5px 10px black",
                        fontWeight: "bold"
                    }
                }).showToast();
                return redirect('/')
            }

            return null
        }
    },
    {
        element: <BaseLayout />,
        loader: () => {
            if (!localStorage.token) {
                Toastify({
                    text: "Please log in first",
                    duration: 2000,
                    newWindow: true,
                    close: true,
                    gravity: "bottom",
                    position: "right",
                    stopOnFocus: true,
                    style: {
                        background: "#EF4C54",
                        color: "#17202A",
                        boxShadow: "0 5px 10px black",
                        fontWeight: "bold"
                    }
                }).showToast();
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