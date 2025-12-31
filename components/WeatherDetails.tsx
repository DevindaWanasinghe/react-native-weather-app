import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { weatherCodeMap } from '../utils/constants';
import { WeatherData } from '../utils/types';

//prop interface 
interface WeatherDetailsProps {
    weather: WeatherData;
    city: string;
}

//weather details component
export default function WeatherDetails({ weather, city }: WeatherDetailsProps) {
    const { current_weather, daily } = weather;
    const weatherInfo = weatherCodeMap[current_weather.weathercode] || weatherCodeMap[0];

    return (
        <View style={styles.container}>
            <Text style={styles.cityName}>Weather in {city}</Text>

            <View style={styles.iconContainer} >
                <Text style={styles.weatherIcon}>{weatherInfo.icon}</Text>
                <Text style={styles.weatherDesc}>{weatherInfo.desc}</Text>
            </View>

            <View style={styles.infoRow}>
                <Text style={styles.label}>Temperature: </Text>
                <Text style={styles.value}>{current_weather.temperature}°C </Text>
            </View>

            <View style={styles.infoRow}>
                <Text style={styles.label}>Wind: </Text>
                <Text style={styles.value}>{current_weather.windspeed} km/h</Text>
            </View>

            <View style={styles.infoRow}>
                <Text style={styles.label}>Sunrise: </Text>
                <Text style={styles.value}>{daily.sunrise[0]}</Text>
            </View>
            
            <View style={styles.infoRow}>
                <Text style={styles.label}>Sunset: </Text>
                <Text style={styles.value}>{daily.sunset[0]}</Text>
            </View>

        </View>    

    );
}

//styles for weather details
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 20,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 5,
    },
    cityName: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
        color: '#0b355eff',

    },
    iconContainer: {
        alignItems: 'center',
        marginVertical: 20,

    },
    weatherIcon: {
        fontSize: 72,
        marginBottom: 10,

    },

    weatherDesc: {
        fontSize: 20,
        color: '#612d2dff',
        fontWeight: '600',

    },

    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',

    },

    label: {
        fontSize: 16,
        color: '#666',
        fontWeight: '500',

    },

    value: {
        fontSize: 16,
        color: '#203a54ff',
        fontWeight: 'bold',

    },
})
