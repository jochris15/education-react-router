import Home from "./views/Home"
import Login from "./views/Login"
import AddMovie from "./views/AddMovie"
import { BrowserRouter, Routes, Route } from "react-router";
import BaseLayout from "./views/BaseLayout";
import Detail from "./views/Detail";

function App() {
  return (
    <>
      <div className="p-5">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<BaseLayout />}>
              <Route path="/" element={<Home />} index />
              <Route path="/add" element={<AddMovie />} />
              <Route path="/detail/:id" element={<Detail />} />
            </Route>
          </Routes>
        </BrowserRouter>,
      </div>
    </>
  )
}

export default App
