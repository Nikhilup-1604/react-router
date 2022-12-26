import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
const Post = () => {
    let {category,id} = useParams()

    {/* useSearchParams */}
    let [searchParams,setSearchParams] = useSearchParams()
    console.log(searchParams);
    console.log(searchParams.get('price'));
    console.log(searchParams.get('sort'));
  return(
    <>
        <h1>Post Page -- {category}</h1>
        <h1>Post page -- {id}</h1>
    </>
  )
}

export default Post