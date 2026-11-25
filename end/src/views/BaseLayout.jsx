import { Navigate, Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Toastify from 'toastify-js'

export default function BaseLayout() {
    if (!localStorage.getItem("token")) {
        Toastify({
            text: "Please log in first",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "#FF0000",
            },
        }).showToast();
        return <Navigate to="/login" />
    }

    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}