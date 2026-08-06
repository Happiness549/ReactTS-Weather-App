import { api } from "../axios";
import type { WeatherData } from "../types/Weather";

export const getCurrentWeather = async(location : string): Promise<WeatherData>  =>{
 
        const response = await api.get(`/${location}`,{
            params: {
                key: import.meta.env.VITE_API_KEY,
                unitGroup: "metric",
                contentType: "json"
            },
        });
        return response.data
    }
