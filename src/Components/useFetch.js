import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data,setData]=useState(null)
    const [isPending,SetIspending]=useState(true)
    const [error,SetError]=useState(null)
    const handleDelete = (id) => {
        setData(blogs => blogs.filter(({blog}) => blog.id !== id));
      }

    useEffect(()=>{
        
        setTimeout(()=>{
            
            fetch(url)
            .then(res=>{
                if(!res.ok){
                    throw Error('Could not fetch the data for that resource')
                }
                return res.json()
            })
            .then(data=>{
                setData(data)
                SetIspending(false)
                SetError(null)
            })
            .catch(error=>{
                SetError(error.message)
                SetIspending(false)
                
            })
      
        },1000)
    },[url])

  return {data,isPending,error,handleDelete}

}

export default useFetch