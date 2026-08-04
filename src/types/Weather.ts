export interface WeatherData {
  time?: string;
    emoji: string;
    temperature: number;
    unit: 'F' | 'C';
    day?: string;
}