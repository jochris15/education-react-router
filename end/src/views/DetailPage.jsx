import { Link, useParams } from "react-router";
import axios from 'axios'
import { useEffect, useState } from 'react';
import gifLoading from '../components/assets/Bean Eater@1x-1.0s-200px-200px.svg'


export default function DetailPage() {
    const { id } = useParams()
    const [product, setProduct] = useState("")
    const [loading, setLoading] = useState("true")

    // function untuk request product dari server
    async function fetchProduct() {
        try {
            setLoading(true)

            const { data } = await axios.get(`https://api.p2.gc01aio.foxhub.space/apis/pub/products/products/${id}`)

            console.log(data.data);

            setProduct(data.data)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }


    useEffect(() => {
        fetchProduct()
    }, []
    )
    return (
        <>
            {loading ? (
                <>
                    <div className="flex justify-center mt-28">
                        <img src={gifLoading} className="w-1/5" />
                    </div>
                </>
            ) : (
                <div className="flex flex-start bg-yellow-400 border-2 border-black p-5 rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)] h-full">

                    <div>
                        <img
                            src={product.imgUrl}
                            alt="product image"
                            className="border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)] h-full"
                        />
                    </div>
                    <div className="flex mx-10 flex-col w-1/2 justify-between">
                        <b className="text-4xl mb-5">{product.name}</b>
                        <p className="h-full">
                            {product.description}
                        </p>
                        <Link to="/" className="w-1/5 mt-5 py-2 px-4 border-2 border-black rounded-2xl text-sm font-medium text-white bg-gray-700 hover:bg-black shadow-[2px_2px_0px_rgba(0,0,0,1)] text-left"> Back to Home</Link>
                    </div>
                </div>
            )}
        </>
    )
}