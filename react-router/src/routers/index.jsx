import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "../views/Home";
import About from "../views/About";
import Detail from "../views/Detail";
import Parent from "../views/Parent";
import Login from "../views/Login";
import Description from "../views/Description";

const router = createBrowserRouter([
    {
        path: "*",
        element: <Parent />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        element: <Parent />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
                children: [
                    {
                        path: "description",
                        element: <Description />
                    }
                ],
                loader: async () => {
                    if (!localStorage.access_token) {
                        return redirect('/')
                    }

                    return null // harus ngereturn sesuatu, gaboleh undefined
                }
            },
            {
                path: "/detail/:name",
                element: <Detail />
            }
        ]
    }
]);

export default router