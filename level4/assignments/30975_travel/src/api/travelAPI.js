import axios from "axios";


const URL = 'https://travel-advisor.p.rapidapi.com/attractions/list-in-boundary'

export const getPlacesData = async  (sw, ne) => {
    try {
        const {data: {data}} = await axios.get('https://travel-advisor.p.rapidapi.com/attractions/list-in-boundary',  {
            params: {
                bl_latitude: sw.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
                tr_latitude: ne.lat,
            },
            headers: {
                'X-RapidAPI-Key': 'd9de6efa57msh75559cb37c36c61p13ec40jsn70a2eeb64151',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        });
        return data;
    } catch (error) {
        console.log("Help! TravelAPI")
    }
}
