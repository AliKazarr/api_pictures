import React from 'react'
import ImageShow from './ImageShow';


function ImageList({images}) {
        const rerenderImages=images.map((image,index)=>{


            return <ImageShow  image={image}  key={index}/>
        })
  return (
    <div  >
         ImageList :{rerenderImages}
    </div>
  )
}

export default ImageList
