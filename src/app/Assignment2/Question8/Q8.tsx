'use client'
import { useState, useEffect, ChangeEvent } from "react";
import {
    buttonStyle,
    containerStyle,
    controlsStyle,
    imageContainerStyle,
    imageStyle
} from './Q8.css'

export default function SlideShow() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [intervalTime, setIntervalTime] = useState(3000); // default 3 seconds

    const images = [
        '/Images/image1.png',
        '/Images/image2.png',
        '/Images/image3.png',
        '/Images/image4.png',
    ];

    // Change to the next slide
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    // Toggle between play and pause
    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    // Handle interval time change
    const handleIntervalChange = (e:ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (!isNaN(value) && value > 0) {
            setIntervalTime(value);
        }
    };

    useEffect(() => {
        if (!isPlaying) return;

        const interval = setInterval(() => {
            nextSlide();
        }, intervalTime);

        return () => clearInterval(interval);
    }, [isPlaying, intervalTime]); 

    return (
        <div style={containerStyle}>
            <div style={imageContainerStyle}>
                <img
                    src={images[currentSlide]}
                    alt={`Slide ${currentSlide + 1}`}
                    style={imageStyle}
                />
            </div>

            <div style={controlsStyle}>
                <button onClick={togglePlayPause} style={buttonStyle}>
                    {isPlaying ? "Pause" : "Play"}
                </button>

                <label style={{ marginLeft: 10 }}>
                    Interval (ms):{" "}
                    <input
                        type="number"
                        value={intervalTime}
                        onChange={handleIntervalChange}
                        min="500"
                        step="500"
                        style={{ width: 80 }}
                    />
                </label>
            </div>
        </div>
    );
}
