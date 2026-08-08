
export const WeatherIcons = (icon: string) => {
    const icons: Record<string, string> = {
        "clear-day": "☀️",
        "clear-night": "🌙",
        cloudy: "☁️",
        "partly-cloudy-day": "⛅",
        "partly-cloudy-night": "☁️",
        rain: "🌧️",
        snow: "🌨️",
        fog: "🌫️",
        wind: "💨"
    }
  return icons[icon] || "⛅"  
}
