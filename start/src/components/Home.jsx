import Card from "../components/Card";
import axios from 'axios';
import { useEffect, useState } from "react";
import Toastify from 'toastify-js'
import gearLoad from "./assets/Gear-0.2s-264px.svg"

export default function Home({ url }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')

    async function fetchProducts() {
        try {
            setLoading(true)
            const { data } = await axios.get(`${url}/apis/pub/branded-things/products?q=${search}&limit=8&page=1&sort=ASC`);
            setProducts(data.data.query);
            console.log(data.data.query);
        } catch (error) {
            Toastify({
                text: error.response.data.error,
                duration: 2000,
                newWindow: true,
                close: true,
                gravity: "bottom",
                position: "right",
                stopOnFocus: true,
                style: {
                    background: "#EF4C54",
                    color: "#17202A",
                    boxShadow: "0 5px 10px black",
                    fontWeight: "bold"
                }
            }).showToast();
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [search])


    return (
        <>
            <div id="PAGE-HOME" className="p-3">

                {/* search */}
                <form action="" method="get" className="flex justify-center items-center">
                    <input
                        type="search"
                        name="search"
                        placeholder="Search"
                        className="input input-bordered input-accent w-24 md:w-auto mx-1 input-sm"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </form>

                {loading ? (
                    <div className="mt-32 flex justify-center items-center">
                        <img src={gearLoad} />
                    </div>
                ) : (
                    <main className="grid grid-cols-2 gap-5 px-10 my-8 bg-white">
                        {products.map(product => {
                            return <Card key={product.id} product={product} />
                        })}
                    </main>
                )}
            </div >
        </>
    )
}