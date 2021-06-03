import { OneWeather } from './../weather/one-weather.model';
import { ref } from 'vue';

const weather = ref<OneWeather>();

function formatTemperature(value: number, format: 'F' | 'C') {
    return `${Math.round(value)}° ${format}`;
}

export default {
    async getCityName(cityName: string){
        const apiCall = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=da38a611b945381bd54190e6bf2afec8&lang=fr&units=metric`)
        const data = await apiCall.json();
        console.log(data);
        return data;
    }
}

export function useWeather() {
    return {
        weather,
        formatTemperature,
    }
}