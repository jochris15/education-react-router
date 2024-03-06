import { useEffect, useState } from "react";
import axios from 'axios';
import Swal from "sweetalert2";

export default function ProductsForm({ setPage }) {
    const token = localStorage.access_token
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [imgUrl, setImgUrl] = useState("")
    const [stock, setStock] = useState(0)
    const [categoryId, setCategoryId] = useState("")
    const [categories, setCategories] = useState([]);
    const url = 'https://phase2-aio.vercel.app'

    async function fetchCategories() {
        try {
            const { data } = await axios.get(`${url}/apis/branded-things/categories`, {
                headers: { Authorization: `Bearer ${token}` }
            });

            setCategories(data.data);
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: error.response.data.error
            });
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const addedData = { name, description, price: +price, imgUrl, stock: +stock, categoryId };
        try {
            const { data } = await axios.post(`${url}/apis/branded-things/products`, addedData, {
                headers: { Authorization: `Bearer ${token}` }
            });
            console.log(data.data);
            setPage('home')
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: error.response.data.error
            });
        }
    }

    useEffect(() => {
        fetchCategories();
    }, [])

    return (<>
        <form className=" grid grid-cols-2 gap-4 p-10" onSubmit={handleSubmit}>
            <div>
                <label className="label">
                    <span className="text-base label-text">Name</span>
                </label>
                <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Name"
                    className="w-full input input-bordered input-primary"
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
                    className="w-full input input-bordered input-primary"
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
                    className="w-full input input-bordered input-primary"
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
                    className="w-full input input-bordered input-primary"
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
                    className="w-full input input-bordered input-primary"
                />
                {/* <a href="" class="text-xs ml-1 text-gray-600 hover:text-primary">Want to upload a file instead?</a> */}
            </div>
            <div>
                <label className="label">
                    <span className="text-base label-text">Category</span>
                </label>
                <select
                    className="w-full input input-bordered input-primary"
                    onChange={(e) => setCategoryId(e.target.value)}
                    name="category"
                    id=""
                >
                    {categories.map(c => {
                        return <option key={c.id} value={c.id}>{c.name}</option>
                    })}
                </select>
            </div>
            <div>
                <button className="btn btn-accent">Add New Product</button>
            </div>
        </form>
    </>)
}