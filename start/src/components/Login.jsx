import Swal from "sweetalert2";
import axios from 'axios';
import { useState } from 'react'

export default function Login({ setPage }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const url = 'https://phase2-aio.vercel.app'

    async function handleLogin(event) {
        event.preventDefault();
        try {
            let { data } = await axios.post(`${url}/apis/login`, { email, password });
            localStorage.setItem("access_token", data.data.access_token);
            setPage('home')
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: error.response.data.error
            })
        }
    }

    return (
        <>
            <div className="relative flex flex-col justify-center h-[85dvh] overflow-hidden bg-base-100">
                <div className="w-full p-6 m-auto rounded-lg shadow-md lg:max-w-lg bg-base-200">
                    <h1 className="text-3xl font-semibold text-center text-accent-focus">
                        Log In
                    </h1>

                    <form className="space-y-4">
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Email</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Email"
                                className="w-full input input-bordered input-accent"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                className="w-full input input-bordered input-accent"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <button onClick={handleLogin} className="btn btn-accent w-full">Log In</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}