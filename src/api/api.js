import axios from 'axios'
import { objectBuilder, errorHandler } from '@/assets/helpers.js'
const APIKey = process.env.VUE_APP_API_KEY;

class OpenWeatherApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.units = 'metric';
        this.city = '';
        this.response = null;
    }

    baseLink = 'https://api.openweathermap.org/data/2.5/weather';

    setCity(city) {
        this.city = city;
    }

    setUnits(units) {
        this.units = units;
    }

    getApiUrl() {
        return `${this.baseLink}?q=${this.city}&units=${this.units}&appid=${this.apiKey}`;
    }

    getWeather() {
        return axios.get(this.getApiUrl())
            .then(objectBuilder)
            .catch(errorHandler)
    }
}

const apiInstance = new OpenWeatherApi(APIKey);

export default apiInstance;