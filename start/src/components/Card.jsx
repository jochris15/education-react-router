export default function Card({ product }) {
    return (<>
        <div className="card bg-gray-100 shadow-2xl flex flex-row">
            <figure className="ml-10">
                <img
                    src={product.imgUrl}
                    alt="product image"
                />
            </figure>
            <div className="card-body flex-1">
                <b>{product.description}</b>
            </div>
        </div>
    </>)
}