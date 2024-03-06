
export default function Nav({ setPage }) {
    function handleLogout() {
        localStorage.clear()
        setPage('login')
    }
    return (<>
        <nav className="navbar sticky top-0 z-10 p-3 bg-gray-100 shadow mb-5">
            <div className="navbar-start">
                <a onClick={() => setPage('login')} className="text-2xl font-bold px-6">
                    <span className="text-blue-300">Login</span>
                </a>
            </div>
            <div className="navbar-center">
                <a onClick={() => setPage('home')} className="text-2xl font-bold px-6">
                    <span className="text-accent">Home</span>
                </a>
                <a onClick={() => setPage('form')} className="text-2xl font-bold px-6">
                    <span className="text-accent">Add product</span>
                </a>
            </div>
            <div className="navbar-end">
                <a onClick={handleLogout} className="text-2xl font-bold px-6">
                    <span className="text-red-300">Logout</span>
                </a>
            </div>
        </nav>
    </>)
}