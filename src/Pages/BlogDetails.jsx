import { Link, useParams } from "react-router-dom"
import { useFetch } from "../Hooks/useFetch"
/*useFetch para traer el JSON */

const BlogDetails = ()=> {
    const params = useParams();
    /* con esto accedemos a la info de las url */

    const { data, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    
    if (loading) return <p> Loading data...</p>
    if (error) return <p> error... </p>

    return (
        <>
            <h1> {data.id} - {data.title} </h1>
            <p> {data.body} </p>
            <Link to="/blog">Volver</Link>
        </>
    )
}

export default BlogDetails