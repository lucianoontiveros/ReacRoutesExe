import { useEffect } from "react"
import { Link, useParams, useSearchParams } from "react-router-dom"
import { useFetch } from "../Hooks/useFetch"


const Blog = () => { 


    const [searchParams, setSearchParams] = useSearchParams()
    useEffect(() => {
        console.log(searchParams.get("name"))
    }, [searchParams])

    const handleChange = (e) => {
        let filter = e.target.value
        setSearchParams({filter})
        if (filter) {
            setSearchParams({ filter });
        } else {
            setSearchParams({});
        }

    }

    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts")
    if (loading) return <p>Loading data...</p>
    if (error) return <p>error... </p>

    return (
        <>
            <h1> Blog </h1>
            <input 
                type="text" 
                name="" 
                onChange={handleChange} 
                className="form-control"
                value={searchParams.get("filter") || ''}
            />
            <ul className="list-group">
                {
                    data.filter((item) => {
                        let filter = searchParams.get("filter");
                        if (!filter) return true;
                        let name = item.title.toLowerCase();
                        return name.startsWith(filter.toLowerCase());
                    })
                    .map(item => (
                        <Link className="list-group-item" to={`/blog/${item.id}`} key={item.id}> {item.id} {item.title} </Link>
                    ))
                }
            </ul>
        </>
    ) 
}

export default Blog