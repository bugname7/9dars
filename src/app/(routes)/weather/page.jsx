"use client";
import { useState } from "react";

export default function Weather() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");

    const myApi = '11fd3717469264084e0ba590185671a4';

    async function fetchWeather(e) {
        e.preventDefault();
        if (!city) return;
        try {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myApi}&units=metric`
            );
            if (!res.ok) {
                throw new Error("boshqa shahar kitiring");
            }
            const data = await res.json();
            setWeather(data);
            setError("");
        } catch (err) {
            setWeather(null);
            setError(err.message);
        }
    }

    return (
        <div className="container border-black mt-5 ml-4 rounded-md p-4 border w-[600px]">
            <h1 className="text-2xl font-bold">Ob-havo Ilovasi</h1>

            <form onSubmit={fetchWeather} className="mt-4">
                <input
                    type="text"
                    placeholder="shahar nomi"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="outline-0 border border-black px-2 rounded-xl shadow-md py-2"
                />
                <button type="submit" className="bg-black p-2 text-white rounded-md ml-2 cursor-pointer hover:shadow-md hover:bg-gray-500">
                    Search
                </button>
            </form>

            {error && <div className="text-red-500 mt-4">{error}</div>}

            {weather && weather.main && (
                <div className="mt-4 p-4 border rounded-md border-black">
                    <h2 className="text-xl font-semibold">{weather.name}</h2>
                    <p>Harorat: {weather.main.temp}°C</p>
                    <p>Namlik: {weather.main.humidity}%</p>
                    <p>Shamol tezligi: {weather.wind.speed} m/s</p>
                </div>
            )}
        </div>
    );
}
