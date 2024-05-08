import { useEffect, useState } from "react";
import axios from 'axios';
import Toastify from 'toastify-js'
import { useNavigate } from "react-router-dom";

export default function ProductsForm({ url }) {
    const token = localStorage.access_token
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [imgUrl, setImgUrl] = useState("")
    const [stock, setStock] = useState(0)
    const [categoryId, setCategoryId] = useState("")
    const [categories, setCategories] = useState([]);

    const navigate = useNavigate()

    async function fetchCategories() {
        try {
            const { data } = await axios.get(`${url}/apis/pub/branded-things/categories`);

            setCategories(data.data);
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
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const addedData = { name, description, price: +price, imgUrl, stock: +stock, categoryId };
        try {
            const { data } = await axios.post(`${url}/apis/branded-things/products`, addedData, {
                headers: { Authorization: `Bearer ${token}` }
            });

            Toastify({
                text: `Data ${data.data.name} has been added`,
                duration: 2000,
                newWindow: true,
                close: true,
                gravity: "bottom",
                position: "right",
                stopOnFocus: true,
                style: {
                    background: "#00B29F",
                    color: "#17202A",
                    boxShadow: "0 5px 10px black",
                    fontWeight: "bold"
                }
            }).showToast();
            navigate('/')
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
        }
    }

    useEffect(() => {
        fetchCategories();
    }, [])

    return (
        <>
            <form className="p-10" onSubmit={handleSubmit}>
                <div className=" grid grid-cols-2 gap-4 mb-10">
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Name</span>
                        </label>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Name"
                            className="w-full input input-bordered input-accent"
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Description</span>
                        </label>
                        <input
                            onChange={(e) => setDescription(e.target.value)}
                            type="text"
                            placeholder="Enter Description"
                            className="w-full input input-bordered input-accent"
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Price</span>
                        </label>
                        <input
                            onChange={(e) => setPrice(e.target.value)}
                            type="number"
                            placeholder="Enter Price"
                            className="w-full input input-bordered input-accent"
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Stock</span>
                        </label>
                        <input
                            onChange={(e) => setStock(e.target.value)}
                            type="number"
                            placeholder="Enter Stock"
                            className="w-full input input-bordered input-accent"
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Image (URL)</span>
                        </label>
                        <input
                            onChange={(e) => setImgUrl(e.target.value)}
                            type="text"
                            placeholder="Image URL"
                            className="w-full input input-bordered input-accent"
                        />
                        {/* <a href="" class="text-xs ml-1 text-gray-600 hover:text-primary">Want to upload a file instead?</a> */}
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Category</span>
                        </label>
                        <select
                            className="w-full input input-bordered input-accent"
                            onChange={(e) => setCategoryId(e.target.value)}
                            name="category"
                            id=""
                        >
                            {categories.map(c => {
                                return <option key={c.id} value={c.id}>{c.name}</option>
                            })}
                        </select>
                    </div>
                </div>
                <div>
                    <button className="btn btn-accent w-full">Add New Product</button>
                </div>
            </form>
        </>
    )
}