import { useState } from "react"
import Home from "./views/Home"
import Login from "./views/Login"
import AddMovie from "./views/AddMovie"
import Detail from "./views/Detail"

function App() {
  const [page, setPage] = useState("login")

  return (
    <>
      <div className="p-5">
        {page === 'login' && <Login setPage={setPage} />}
        {page === 'home' && <Home setPage={setPage} />}
        {page === 'add' && <AddMovie setPage={setPage} />}
      </div>
    </>
  )
}

export default App
