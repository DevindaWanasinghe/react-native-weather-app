import { cityCoordinates } from '@/utils/constants';
import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface CityPickerProps {
    selectedCity: string;
    onCityChange: (city: string) => void;
}

export default function CityPicker({ selectedCity, onCityChange }: CityPickerProps) {
    const cities = Object.keys(cityCoordinates);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Select City:</Text>
            <Picker
                selectedValue={selectedCity}
                onValueChange={onCityChange}
                style={styles.picker}
            >
                {cities.map((city) => (
                    <Picker.Item key={city} label={city} value={city} />
                ))}
            </Picker>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333',

    },
    picker: {
        height: 50,

    },
});
  