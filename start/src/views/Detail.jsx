export default function Detail() {
    return (
        <>
            <div className="flex flex-start bg-blue-400 border-2 border-black p-5 rounded-lg shadow-[2px_2px_0px_rgba(0,0,0,1)] h-full mt-10">
                <div>
                    <img src="https://res.cloudinary.com/dpjqm8kkk/image/upload/v1723524663/hacktiv8/movies/zack-snyder%27s-justice-league-nvn05ijcvlh.jpg" alt="product image" className="border-2 border-black rounded-lg shadow-[2px_2px_0px_rgba(0,0,0,1)] h-full" />
                </div>
                <div className="flex mx-10 flex-col w-1/2 justify-between">
                    <b className="text-4xl mb-5">
                        Zack Snyder's Justice League
                    </b>
                    <p className="h-full">
                        Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.
                    </p>
                    <div>
                        <a to="/" className="text-2xl font-bold cursor-pointer">Back</a>
                    </div>
                </div>
            </div>

        </>
    )
}