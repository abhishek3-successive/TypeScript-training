// 8.Create a temperature converter component with two input fields: one for Celsius and one for Fahrenheit. 
// Implement controlled components for both inputs. When the user enters a value in one input, the other input should update with the converted temperature.

'use client'
import { ChangeEvent, useState } from 'react';

export default function TemperatureConverter() {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    // Handle Celsius input change
    const handleCelsiusChange = (e:ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setCelsius(value);
        if (value === '') {
            setFahrenheit('');
            return;
        }
        const f = (parseFloat(value) * 9) / 5 + 32;
        setFahrenheit(f.toFixed(2));
    };

    // Handle Fahrenheit input change
    const handleFahrenheitChange = (e:ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setFahrenheit(value);
        if (value === '') {
            setCelsius('');
            return;
        }
        const c = ((parseFloat(value) - 32) * 5) / 9;
        setCelsius(c.toFixed(2));
    };

    return (
        <>
            <h2>Temperature Converter</h2>
            <div>
                <label>Celsius:</label>
                <input
                    type="number"
                    value={celsius}
                    onChange={handleCelsiusChange}
                    placeholder="Enter °C"
                />
            </div>
            <div>
                <label>Fahrenheit:</label>
                <input
                    type="number"
                    value={fahrenheit}
                    onChange={handleFahrenheitChange}
                    placeholder="Enter °F"
                />
            </div>
        </>
    );
}

