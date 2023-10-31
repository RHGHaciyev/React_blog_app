import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams()
    const {data: blog,isPending,error}=useFetch('http://localhost:9000/blogs/' + id)
    const navigate=useNavigate()
    const handleDelete=()=>{
        fetch('http://localhost:9000/blogs/' + blog.id,{
            method:'DELETE'
        }).then(()=>{
          navigate('/')
        })
    }
    return ( 
        <div className="blog-details">
          
        {error && <div>{error}</div>}
        {isPending && <div className={{"color":"#4835f1"}}>Loading...</div>}
        {blog &&
        <article>
            <h2>{blog.title}</h2>
            <p>Written by : {blog.author}</p>
            <div>{blog.body}</div>
            <button onClick={()=>handleDelete(blog.id)}>delete blog</button>
        </article>
        }
        </div>
     );
}
 
export default BlogDetails;