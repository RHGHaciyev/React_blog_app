import React from 'react'
import Blog from './Blog'
import useFetch from './useFetch'

const Home = () => {
const {data: blogs,isPending,error}=useFetch('http://localhost:9000/blogs/')

  return (
    <div className='Home'>
        {error && <div>{error}</div>}
        {isPending && <div className={{"color":"#4835f1"}}>Loading...</div>}
        {blogs && <Blog blogs={blogs} title="All blogs"/>}
    </div>
  )
  
}

export default Home