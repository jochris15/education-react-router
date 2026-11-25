import axios from "axios"
import { useEffect, useState } from "react"
import baseUrl from "../constant/baseUrl"
import { Link, useParams } from "react-router"
import loadingGIF from '../assets/loading.svg'

export default function Detail() {
    const [movie, setMovie] = useState({})
    const [loading, setLoading] = useState(false)
    const { id } = useParams()

    async function fetchMovie() {
        try {
            setLoading(true)
            const { data } = await axios.get(`${baseUrl}/apis/pub/movies/movies/${id}`)

            setMovie(data.data)
        } catch (error) {
            console.log(error.response);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchMovie()
    }, [])

    return (
        <>
            <div className="flex flex-start bg-blue-400 border-2 border-black p-5 rounded-lg shadow-[2px_2px_0px_rgba(0,0,0,1)] h-full mt-10">
                {loading ? (
                    <>
                        <div className="flex justify-center w-full">
                            <img src={loadingGIF} className="w-1/3 mt-20" />
                        </div>
                    </>
                ) : (
                    <>
                        <div>
                            <img src={movie.imgUrl} alt="product image" className="border-2 border-black rounded-lg shadow-[2px_2px_0px_rgba(0,0,0,1)] h-full" />
                        </div >
                        <div className="flex mx-10 flex-col w-1/2 justify-between">
                            <b className="text-4xl mb-5">
                                {movie.title}
                            </b>
                            <p className="h-full">
                                {movie.synopsis}
                            </p>
                            <div>
                                <Link to="/" className="text-2xl font-bold cursor-pointer">Back</Link>
                            </div>
                        </div>
                    </>
                )}
            </div >
        </>
    )
}