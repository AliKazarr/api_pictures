import { useState } from "react";
import SearchImages from "./ApiConnect";
import ImageList from './components/ImageList';
import SearchBar from "./components/SearchBar";
import './index.css'

function App() {
const [images,setImages]=useState([])

const handleSubmit= async(term)=>
{
  const result=await SearchImages(term)
  setImages(result)

 
}

  return (
    <div>
     <SearchBar onSubmit={handleSubmit}/>

     <ImageList images={images}/>

    <h1 className="text-2xl font-bold text-red-600"> hello</h1>

    
    </div>
  );
}

export default App;
