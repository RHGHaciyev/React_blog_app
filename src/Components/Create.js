import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Rizvan')
    const [isPending,SetIspending]=useState(false)
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
       e.preventDefault();
       SetIspending(true)
       const blog={title,body,author}
       console.log(blog)
       fetch('http://localhost:9000/blogs/',{
        method: 'Post',
        headers: { "Content-Type" : "application/json"},
        body:JSON.stringify(blog)
       }).then(()=>{
        SetIspending(false)
        navigate('/')
       })
    }
    return (
        <div className="create">
            <h1>Create new blog</h1>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input
                    type='text'
                    required
                    value={title}
                    onChange={e => setTitle(e.target.value)}

                />
                <label>Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={e => setBody(e.target.value)}
                ></textarea>
                <label>Author:</label>
                <select
                    value={author}
                    onChange={e=>setAuthor(e.target.value)}
                >
                    <option value="Rizvan">Rizvan</option>
                    <option value="Avdi">Avdi</option>
                </select>
                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Adding blog...</button>}
            </form>
           
        </div>
    )
}
export default Create;