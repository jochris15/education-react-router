import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import Login from './components/Login'
import ProductsForm from './components/ProductsForm'
import { useEffect } from 'react'

export default function App() {
    const [page, setPage] = useState('home')
    useEffect(() => {
        if (localStorage.access_token) {
            setPage("home")
        } else {
            setPage("login")
        }
    }, [])

    return (
        <>
            <Nav setPage={setPage} />
            {localStorage.access_token && page === 'home' && <Home />}
            {!localStorage.access_token && page === 'login' && <Login setPage={setPage} />}
            {localStorage.access_token && page === 'form' && <ProductsForm setPage={setPage} />}
        </>
    )
}