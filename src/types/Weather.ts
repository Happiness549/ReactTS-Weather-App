export interface HourlyData {
  time?: string;
    emoji: string;
    temperature: number;
    unit: 'F' | 'C';
    day?: string;
}

export interface DailyData{
  day: string; 
  date: string; 
  emoji: string;
  condition: string; 
  tempMax: number;
  tempMin: number;

}

export type TabOption = 'hourly' | 'daily';
