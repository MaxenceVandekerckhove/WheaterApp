import { Plugins} from '@capacitor/core';
import { ref } from 'vue';
import { OneWeather } from './one-weather.model';

const weatherUrl = 'https://api.openweathermap.org/data/2.5/onecall?exclude=minutely,hourly&lang=fr&appid=da38a611b945381bd54190e6bf2afec8';

const weather = ref<OneWeather>();



async function fetchWeather() {
    const { coords } = await Plugins.Geolocation.getCurrentPosition();
    const response = await fetch(`${weatherUrl}&lat=${coords.latitude}&lon=${coords.longitude}&units=metric`);
    weather.value = await response.json();
}

fetchWeather();

setInterval(fetchWeather, 120000);

function formatTemperature(value: number, format: 'F' | 'C') {
    return `${Math.round(value)}° ${format}`;
}

function getWeatherImageUrl(iconName: string, size: '2x' | '4x') {
    return `http://openweathermap.org/img/wn/${iconName}@${size}.png`;
}

export function useWeather() {
    return {
        weather,
        formatTemperature,
        getWeatherImageUrl,
    }
}
