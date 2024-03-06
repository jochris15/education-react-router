import { Link, useNavigate } from "react-router-dom"

export default function Nav() {
    const navigate = useNavigate()

    function handleLogout() {
        localStorage.clear()
        navigate('/login')
    }

    return (<>
        <nav className="navbar sticky top-0 z-10 p-3 bg-gray-100 shadow mb-5">
            <div className="navbar-start">
                <Link to="/login" className="text-2xl font-bold px-6">
                    <span className="text-blue-300">Login</span>
                </Link>
            </div>
            <div className="navbar-center">
                <Link to="/" className="text-2xl font-bold px-6">
                    <span className="text-accent">Home</span>
                </Link>
                <Link to="/add" className="text-2xl font-bold px-6">
                    <span className="text-accent">Add product</span>
                </Link>
            </div>
            <div className="navbar-end">
                <Link onClick={handleLogout} className="text-2xl font-bold px-6">
                    <span className="text-red-300">Logout</span>
                </Link>
            </div>
        </nav>
    </>)
}