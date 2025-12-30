export interface WeatherData {
    current_weather: {
        temperature: number;
        windspeed: number;
        weathercode: number;
    };
    daily: {
        sunrise: string[];
        sunset: string[];
    };
}