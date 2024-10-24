export default function Navbar({ setPage }) {
    return (
        <>
            {/* navbar */}
            <nav className="sticky top-0 z-10 p-3 bg-purple-400 border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)] flex justify-center">
                <div>
                    <a className="text-2xl font-bold px-6 cursor-pointer text-white" onClick={() => setPage('login')}>
                        <span>Login</span>
                    </a>
                    <a className="text-2xl font-bold px-6 cursor-pointer" onClick={() => setPage('home')}>
                        <span>Home</span>
                    </a>
                    <a className="text-2xl font-bold px-6 cursor-pointer" onClick={() => setPage('add')}>
                        <span>Add Product</span>
                    </a>
                    <a className="text-2xl font-bold px-6 cursor-pointer text-white"
                        onClick={() => setPage('login')}>
                        <span>Logout</span>
                    </a>
                </div>
            </nav>
            <br />
        </>
    )
}