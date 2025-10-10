import { useState } from 'react'
import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'
import AddProductPage from './components/AddProductPage'
import { useEffect } from 'react'

export default function App() {
    const [page, setPage] = useState('login')

    useEffect(() => {
        if (localStorage.access_token) {
            setPage('home')
        } else {
            setPage('login')
        }
    }, [])

    return (
        <>
            <div className="p-5">
                {page === 'login' && !localStorage.access_token && < LoginPage setPage={setPage} />}
                {page === 'home' && localStorage.access_token && <HomePage setPage={setPage} />}
                {page === 'add' && localStorage.access_token && <AddProductPage setPage={setPage} />}
            </div >
        </>
    )
}