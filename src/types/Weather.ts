export interface Day {
    icon?: string;
    temp?: number;
    day?: string;
    datetime?: string; 
    conditions?: string; 
    tempMax?: number;
    tempMin?: number;
    hours: Hour[];
}

export interface Hour{
  datetime: string;
  temp: number;
  conditions: string;
  icon: string;
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
    unit?: 'F' | 'C';
    time?: string;
    days?:Day[];

  };


 
 