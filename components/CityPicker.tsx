import { cityCoordinates } from '@/utils/constants';
import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//prop interface
interface CityPickerProps {
    selectedCity: string;
    onCityChange: (city: string) => void;
}

//city picker component
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



//styles for city picker
const styles = StyleSheet.create({
    container: {
        marginVertical: 12,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        
    },
    label: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 6,
        color: '#0b355eff',

    },
    picker: {
        height: 50,
        borderRadius: 10,

    },
});
  