import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import Login from './components/Login'
import ProductsForm from './components/ProductsForm'
import { useEffect } from 'react'

export default function App() {
    const [page, setPage] = useState('home')
    let token = localStorage.access_token
    useEffect(() => {
        if (token) {
            setPage("home")
        } else {
            setPage("login")
        }
    }, [])

    return (
        <>
            <Nav setPage={setPage} />
            {token && page === 'home' && <Home />}
            {!token && page === 'login' && <Login setPage={setPage} />}
            {token && page === 'form' && <ProductsForm setPage={setPage} />}
        </>
    )
}