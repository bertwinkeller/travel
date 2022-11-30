import axios from 'axios'



export const getPlacesData = async (type, sw, ne) => {
    try{


    console.log('Hell')
    console.log(process.env.REACT_APP_MAPS_API)
    console.log(process.env.REACT_APP_RAPID)
      
          
        const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, 
            {
     
                params: {
                  bl_latitude: sw.lat,
                  tr_latitude: ne.lat ,
                  bl_longitude:  sw.lng,
                  tr_longitude: ne.lng
                }, 
                headers: {
                  'X-RapidAPI-Key': process.env.REACT_APP_RAPID,
                  'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
                }
            } )

        return data

    } catch(error){
        console.log(error)
    }
}