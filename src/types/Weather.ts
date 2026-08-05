export interface WeatherData {
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
