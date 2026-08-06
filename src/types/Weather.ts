export interface DailyHourlyData {
    time?: string;
    emoji?: string;
    temperature?: number;
    unit?: 'F' | 'C';
    day?: string;
    date?: string; 
    condition?: string; 
    tempMax?: number;
    tempMin?: number;
}

export type TabOption = 'hourly' | 'daily';

 export interface WeatherData {
    address: string;
    temp: number;
    feelslike: number;
    humidity: number;
    windspeed: number;
    datetime: string;
    conditions: string;
    icon: string;
    timezone: number;
    
  };


    // location: string;
    // temperature: number;
    // unit: 'F' | 'C';
    // condition: string;
    // humidity: number;
    // windSpeed: number;
    // date: string;   
 