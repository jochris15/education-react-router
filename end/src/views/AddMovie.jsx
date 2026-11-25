import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios';
import baseUrl from '../constant/baseUrl';
import Toastify from 'toastify-js'

export default function AddMovie({ setPage }) {
    const [genre, setGenre] = useState([])
    const [form, setForm] = useState({
        title: "",
        synopsis: "",
        trailerUrl: "",
        imgUrl: "",
        rating: 0,
        genreId: 0
    })

    function handleForm(value, fieldName) {
        setForm((oldValue) => {
            return {
                ...oldValue,
                [fieldName]: value
            }
        })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const { data } = await axios.post(`${baseUrl}/apis/movies/movies`, form, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })

            Toastify({
                text: `Succeed add new movie ${data.data.title}`,
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "#008000",
                },
            }).showToast();

            setPage("home")
        } catch (error) {
            Toastify({
                text: error.response.data.message,
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "#FF0000",
                },
            }).showToast();
        }
    }

    async function fetchGenre() {
        try {
            const { data } = await axios.get(`${baseUrl}/apis/movies/genres`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })

            setGenre(data.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchGenre()
    }, [])
    return (
        <>
            <Navbar setPage={setPage} />
            {/* add form */}
            <form className="p-5 mt-5 border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)] bg-red-400" onSubmit={handleSubmit}>
                <h1 className="text-2xl font-bold text-center mb-4">Add New Movie</h1>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="label">
                            <span className="font-bold">Title</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Title"
                            className="bg-white w-full px-3 py-2 border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                            onChange={(e) => handleForm(e.target.value, "title")}
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="font-bold">Synopsis</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Synopsis"
                            className="bg-white w-full px-3 py-2 border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                            onChange={(e) => handleForm(e.target.value, "synopsis")}
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="font-bold">Trailer (URL)</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Trailer URL"
                            className="bg-white  w-full px-3 py-2 border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                            onChange={(e) => handleForm(e.target.value, "trailerUrl")}
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="font-bold">Image (URL)</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Image URL"
                            className="bg-white w-full px-3 py-2 border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                            onChange={(e) => handleForm(e.target.value, "imgUrl")}
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="font-bold">Rating</span>
                        </label>
                        <input
                            type="number"
                            placeholder='Enter Rating'
                            className="bg-white w-full px-3 py-2 border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                            onChange={(e) => handleForm(+e.target.value, "rating")}
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="font-bold">Genre</span>
                        </label>
                        <select
                            className="bg-white w-full px-3 py-2 border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                            name="genre"
                            onChange={(e) => handleForm(+e.target.value, "genreId")}
                        >
                            {genre.map((g) => {
                                return <option value={g.id} key={g.id}>{g.name}</option>
                            })}
                        </select>
                    </div>
                </div>
                <div className="mt-5">
                    <button className="w-full mt-5 py-2 px-4 border-2 border-black rounded-2xl text-sm font-medium text-white bg-gray-700 hover:bg-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                        Add New Movie
                    </button>
                </div>
            </form>
        </>
    )
}