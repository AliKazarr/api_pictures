import axios from 'axios'

const searcImages=async(term)=>{

const response=await axios.get('https://api.unsplash.com/search/photos',

{
    headers:{Authorization: 'Client-ID o6NKM0fRD7SJNXXCczkW40fWzfgxN0nBDEAo5O3hRzI'}
,
 
    params:
    {
        query:term
    }
}
)
     return response.data.results
}
export default searcImages