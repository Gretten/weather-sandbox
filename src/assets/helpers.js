export const objectBuilder = response => {
    let data = response.data;
    let main = data.main;
    return {
        status: response.status,
        mainWeather: {
            city: data.name,
            temp: Math.round(main.temp),
            minTemp: Math.round(main.temp_min),
            maxTemp: Math.round(main.temp_max),
            feelsLike: main.feels_like,
            currentState: data.weather[0].main,
            icon: data.weather[0].icon,
        },
        details: [{
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

export const errorHandler = (error) => {
    return {
        isError: true,
        errorCode: error.response.status,
        errorName: error.response.statusText,

    }
}