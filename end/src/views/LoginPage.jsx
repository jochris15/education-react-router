import axios from 'axios'
import { useState } from 'react';
import Toastify from 'toastify-js'
import { Navigate, useNavigate } from "react-router"

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    async function handleLogin(e) {
        // karena submit itu ada refresh by default
        e.preventDefault()
        try {
            const { data } = await axios.post(`https://api.p2.gc01aio.foxhub.space/apis/auth/login`, { email, password })

            localStorage.setItem('access_token', data.data.token)
            navigate("/")
            Toastify({
                text: "Login success",
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "#34D399",
                    color: "#000000"
                },
            }).showToast();
        } catch (error) {
            Toastify({
                text: error.response.data.message,
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "#F87171",
                    color: "#000000"
                }
            }).showToast();
        }
    }

    // protecting routes
    if (localStorage.access_token) {
        Toastify({
            text: "You already logged in",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "#F87171",
                color: "#000000"
            }
        }).showToast();
        return <Navigate to="/" />
    }

    return (
        <>
            {/* login */}
            <div className="min-h-screen flex items-center justify-center w-full">
                <div className="rounded-lg px-8 py-6 w-1/3 bg-blue-400 border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                    <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium ">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="bg-white w-full px-3 py-2 border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                                placeholder="your@email.com"
                                autoComplete='current-email'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="bg-white w-full px-3 py-2 border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                                placeholder="Enter your password"
                                autoComplete='current-password'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button className="w-full mt-5 py-2 px-4 border-2 border-black rounded-2xl text-sm font-medium text-white bg-gray-700 hover:bg-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}