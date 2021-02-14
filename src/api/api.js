const axios = require('axios');
const APIKey = process.env.VUE_APP_API_KEY;

class OpenWeatherApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseLink = `https://api.openweathermap.org/data/2.5/weather`;
        this.units = 'metric';
        this.city = 'Moscow';
        this.response = null;
    }

    getApiUrl = () => `${this.baseLink}?q=${this.city}&units=${this.units}&appid=${this.apiKey}`;

    weatherObjectBuilder(response) {
        let data = response.data;
        let main = data.main;

        return {
            mainWeather: {
                city: data.name,
                temp: Math.round(main.temp),
                minTemp: Math.round(main.temp_min),
                maxTemp: Math.round(main.temp_max),
                feelsLike: main.feels_like,
                currentState: data.weather[0].main,
                icon: data.weather[0].icon,
            },
            details: [
                {
                    payload: main.pressure,
                    title: 'Pressure',
                    icon: 'fas fa-water',
                    measure: 'Pa',
                },
                {
                    payload: main.humidity,
                    title: 'Humidity',
                    icon: 'fas fa-temperature-high',
                    measure: '%',
                },
                {
                    payload: data.visibility,
                    title: 'Visibility',
                    icon: 'fas fa-cloud',
                    measure: 'm',
                },
                {
                    payload: data.wind.speed,
                    title: 'Speed',
                    icon: 'fas fa-wind',
                    measure: 'm/s',
                },
            ]
        }
    }

    setCity(city) {
        this.city = city;
    }

    setUnits(units) {
        this.units = units;
    }

    getWeather() {
        this.retrieve();
        return this.response
            .then(res => {
                return this.weatherObjectBuilder(res)
            })
            .catch((err) => {
                return console.log(err)
            })
    }

    retrieve() {
        this.response = axios.get(this.getApiUrl())
    }
}

const apiInstance = new OpenWeatherApi(APIKey);

export default apiInstance;
