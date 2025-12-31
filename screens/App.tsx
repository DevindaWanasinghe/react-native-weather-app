import axios from "axios";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from "react-native";
import CityPicker from "../components/CityPicker";
import WeatherDetails from "../components/WeatherDetails";
import { cityCoordinates } from "../utils/constants";
import { WeatherData } from "../utils/types";

// Main Component
export default function WeatherApp() {
    const [city, setCity] = useState('Colombo');
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState(false);

    //fetch weather data
    const fetchWeather = async () => {
        try {
            setLoading(true);
            const today = new Intl.DateTimeFormat('en-CA', { 
                timeZone: 'Asia/Colombo', 
                year: 'numeric', 
                month: '2-digit', 
                day: '2-digit' 
            }).format(new Date());
            const { lat, lon } = cityCoordinates[city];
            const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=sunrise,sunset&timezone=Asia%2FColombo&start_date=${today}&end_date=${today}`;
            const { data } = await axios.get<WeatherData>(url);
            setWeather(data);
            
        } catch (error) {
            console.error("Error fetching weather data:", error);
            
        } finally {
            setLoading(false);
        }
    };


    //fetch wether when city change
    useEffect(() => {
        fetchWeather();
    }, [city]);


    return (
        <ScrollView style={styles.container} >
            <View style={styles.content} >
                <View style={styles.header}>
                    <Text style={styles.title}> Sri Lanka Weather App </Text>
                </View>

                <CityPicker selectedCity={city} onCityChange={setCity} />

                {loading ? (
                    <ActivityIndicator size="large" color="#2980b9" style={styles.loader} />
                ) : weather ? (
                    <WeatherDetails weather={weather} city={city} />
                ) : ( 
                    <Text style={styles.errorText}> No weather data available! </Text> 
                
                )}
                
            </View>
        </ScrollView>
    );

}


//styles for app.tsx
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#def3f9ff',
    },
    content: {
        padding: 20,
        paddingTop: 60,
    },
    header: {
        alignItems: "center",
        marginBottom: 25,
    },
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#0b355eff',
    },
    loader: {
        marginTop: 40,
    },
    errorText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#e74c3c',
        marginTop: 20,
    },






});