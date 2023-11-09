import { Link, Outlet } from "react-router-dom"


const About = () => {
    return (
        <>

            <h1>INI ABOUT</h1>
            <Link to="/about/description">open description</Link>
            <Outlet />
        </>
    )
}

export default About