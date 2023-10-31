import { Link } from "react-router-dom";

const Blog = ({blogs,title}) => {

  return ( 
      <div className="blog-list">
          <h3 style={{"marginLeft":"15px","color":"black"}}>{title}</h3>
          {
          blogs.map((blog)=>(
          <div className=" blog-preview" key={blog.id}>
            <Link to={`/blog/${blog.id}`}>
            <h2>{blog.title}</h2>
           <p>Writen by: {blog.author}</p>
         
            </Link>
          
          </div>   
          ))
         }
      </div>
   );
}

export default Blog;