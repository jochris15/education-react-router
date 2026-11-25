export default function Card({ movie, idx }) {
    return (
        <>
            <div className={`h-full flex flex-col gap-5 justify-center items-center border-2 border-black p-5 rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)] ${idx % 2 === 0 ? "bg-blue-400" : "bg-yellow-400"}`}>
                <div className="h-full">
                    <img
                        src={movie.imgUrl}
                        alt="movie image"
                        className="border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                    />
                </div>
                <div className="h-full">
                    <b>{movie.title}</b>
                    <hr className="border-black w-full mt-2" />
                    <p className="line-clamp-3 mt-2">
                        {movie.synopsis}
                    </p>
                </div>
            </div>
        </>
    )
}