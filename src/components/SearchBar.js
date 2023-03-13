
import React from 'react'
import { useState } from 'react';

function SearchBar({onSubmit}) {
 const [changeImages,setImages]=useState([])
const Submit=(event)=>{

   event.preventDefault()
   onSubmit(changeImages)
}
const handleClick=(event)=>
{
   setImages(event.target.value)
}


  return (
    <div>
      

      <form action="" onSubmit={Submit}  className="bg-sky-500/100"  >

        <input type="text" onChange={handleClick} value={changeImages}   className="bg-red-500/100  mt-6"/>
      </form>
    </div>
  )
}

export default SearchBar
