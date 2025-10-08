export default function Card({ product }) {
    return (
        <>
            <div key={product.id}>
                {/* card */}
                <div className="flex flex-col flex-start items-center bg-yellow-400 border-2 border-black p-5 rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)] h-full">
                    <div>
                        <img
                            src={product.imgUrl}
                            alt="product image"
                            className="border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                        />
                    </div>
                    <div className="flex flex-col divide-y divide-black">
                        <b className="mt-5">{product.name}</b>
                        <p>
                            {product.description.length > 100 ? product.description.substring(0, 100) + " . . ." : product.description}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}