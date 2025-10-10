import { BrowserRouter, Routes, Route } from "react-router";
import LoginPage from './views/LoginPage'
import HomePage from './views/HomePage'
import AddProductPage from './views/AddProductPage'
import BaseLayout from "./views/BaseLayout";
import DetailPage from "./views/DetailPage";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route element={<BaseLayout />}>
                        <Route path="/" index element={<HomePage />} />
                        <Route path="/add" element={<AddProductPage />} />
                        <Route path="/detail/:id" element={<DetailPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>,
        </>
    )
}