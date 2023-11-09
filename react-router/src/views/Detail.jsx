import { useParams } from 'react-router-dom';

const Detail = () => {
    const { name } = useParams()

    return (
        <>
            <h1>ini detail {name}</h1>
        </>
    )
}

export default Detail