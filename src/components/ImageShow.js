import React from 'react'

function ImageShow({image}) {
  return (
    <div className="  flex flex-col  " >



    <div><img  className="w-1/5 p-2" src={image.urls.regular} alt="" />
      <p style={{color:'red'}}   >{image.alt_description}</p></div>
      


      
    </div>
  )
}

export default ImageShow
