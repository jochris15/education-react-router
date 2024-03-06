import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import Swal from "sweetalert2";
import gearLoad from '../components/assets/Gear-0.2s-264px.svg'

export default function Detail({ url }) {
    const [product, setProduct] = useState("")
    const [loading, setLoading] = useState(false)
    const { id } = useParams()

    async function fetchProduct() {
        try {
            setLoading(true)
            const { data } = await axios.get(`${url}/apis/pub/branded-things/products/${id}`);
            setProduct(data.data);
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: error.response.data.error,
            });
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProduct();
    }, [])

    return (
        <>
            {loading ? (
                <>
                    <div className="mt-32 flex justify-center items-center">
                        <img src={gearLoad} />
                    </div>
                </>
            ) : (
                <>
                    <div className="p-20 bg-gray-100 shadow-2xl flex flex-row">
                        <figure className="flex flex-1">
                            <img
                                src={product.imgUrl}
                                alt="product image"
                                className="w-1/2 ml-20 rounded-xl"
                            />
                        </figure>
                        <div className="flex flex-1 flex-col">
                            <b className="mb-5 text-left">{product.name}</b>
                            <p className="text-left">
                                {product.description}
                            </p>
                        </div>
                    </div>
                </>
            )}

        </>
    )
}