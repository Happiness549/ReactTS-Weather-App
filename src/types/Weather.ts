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

   location: {
    name: string;
  };
  current: {
    temp_c: number;
    humidity: number;
    wind_kph: number;
    date: string;
    condition: {
      text: string;
      icon: string;
    };
  };
}

    // location: string;
    // temperature: number;
    // unit: 'F' | 'C';
    // condition: string;
    // humidity: number;
    // windSpeed: number;
    // date: string;   
 