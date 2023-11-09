import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [students, setStudents] = useState([
        {
            id: 1,
            name: 'Dzul',
            gender: "M"
        },
        {
            id: 2,
            name: 'Bayu',
            gender: "M"
        },
        {
            id: 3,
            name: 'Sabi',
            gender: "F"
        }
    ])

    const navigate = useNavigate()

    const handleClick = (name) => {
        navigate(`/detail/${name}`)
    }

    return (
        <>
            <h1>INI HOME</h1>
            {students.map(student => {
                return (
                    <span key={student.id}>
                        <button onClick={() => handleClick(student.name)}>{student.name}</button>
                    </span>

                )
            })}
        </>
    )
}

export default Home