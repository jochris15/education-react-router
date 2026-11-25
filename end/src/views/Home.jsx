import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from 'axios'
import baseUrl from "../constant/baseUrl";
import loadingGIF from '../assets/loading.svg'

export default function Home() {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState("")

    // const [count, setCount] = useState(0)
    // const [count2, setCount2] = useState(0)

    //  useEffect(setup, dependencies?)

    // // 1. side effect re-render
    // // tidak terlalu sering digunakan karena terlalu sering tertrigger
    // // paling hanya digunakan untuk logging
    // useEffect(() => {
    //     console.log("console log ini akan tertrigger saat ada efek re-render terjadi");
    // })

    // // 2. side effect mounted
    // // bentuk utama dari use effect
    // // digunakan untuk fetch data
    // useEffect(() => {
    //     console.log("console log ini akan tertrigger sebelum pemasangan komponen pertama kali / mounted");
    // }, [])

    // // 3. side effect watcher
    // // bentuk evolusi dari mounted
    // // digunakan untuk mengamati suatu / beberapa state
    // // contoh penggunaan bisa untuk fetch data with pagination / ngamatin password / live search
    // useEffect(() => {
    //     console.log("console log ini akan tertrigger sebelum pemasangan komponen pertama kali / mounted dan pada saat state yang di ada di dependencies berubah");
    // }, [count2])

    // // 4. side effect unmounted
    // // bentuk evolusi lain dari mounted
    // // digunakan untuk proses cleanup
    // // contoh penggunaan bisa untuk membersihkan fitur2 / plugin tambahan dalam suatu komponen
    // useEffect(() => {
    //     // masih ranahnya mounted
    //     // console.log("console log ini akan tertrigger sebelum pemasangan komponen pertama kali / mounted");

    //     return () => {
    //         // baru ranahnya unmounted
    //         console.log("console log ini akan tertrigger sebelum pencopotan komponen / unmounted");
    //     }
    // }, [])

    async function fetchMovies() {
        try {
            setLoading(true)
            const { data } = await axios.get(`${baseUrl}/apis/pub/movies/movies?limit=12&q=${search}`)

            setMovies(data.data)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchMovies()
    }, [search])

    return (
        <>
            {/* <button className="w-full bg-blue-400" onClick={() => setCount(count + 1)}>{count}</button>
            <button className="w-full bg-red-400" onClick={() => setCount2(count2 + 1)}>{count2}</button> */}

            {/* Search */}
            <form className="max-w-md mx-auto border-2 border-black rounded-lg shadow-[2px_2px_0px_rgba(0,0,0,1)] mt-5">
                <div className="relative flex items-center w-full h-12 rounded-lg bg-white overflow-hidden">
                    <div className="grid place-items-center h-full w-12 text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input className="peer h-full w-full outline-none text-sm text-gray-800 pr-2" type="text" id="search" placeholder="Search something.."
                        onChange={(e) => setSearch(e.target.value)} />
                </div>
            </form>


            {/* home */}
            <div id="PAGE-HOME" className="min-h-screen flex items-center justify-center">
                {loading ? (
                    <>
                        <div className="flex justify-center w-full">
                            <img src={loadingGIF} className="w-1/4" />
                        </div>
                    </>
                ) : (
                    <>
                        <main className="my-5 bg-white grid grid-cols-6 gap-5">
                            {movies.map((movie, idx) => {
                                return <Card movie={movie} key={movie.id} idx={idx} />
                            })}
                        </main>
                    </>
                )}
            </div>
        </>
    )
}