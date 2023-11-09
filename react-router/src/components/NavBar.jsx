import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <Link to="/"><button>HOME</button></Link> | {" "}
            <Link to="/about"><button>ABOUT</button></Link>
        </>
    )
}

export default NavBar