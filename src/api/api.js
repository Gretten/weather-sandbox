require('dotenv').config({path: '../.env'});
const fetch = require('node-fetch');

const APIKey = process.env.API_KEY;

const getServiceResponse = async (city) => {
    const APILink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a0408c4d5fded32e057194a7540e3f41`;

    let response = await fetch(APILink);

    if (response.ok) { 
        let json = await response.json();
        return json;
    } else {
        return "HTTP-Error: " + response.status;
    }
}

const dataHandler = ( city ) => {
    const json = getServiceResponse(city, APIKey);
    return json.then(res => {
        // some magic from SO
        let result = Object.assign({}, ...function _flatten(o) { return [].concat(...Object.keys(o).map(k => typeof o[k] === 'object' ? _flatten(o[k]) : ({[k]: o[k]})))}(res))
        
        for (let key in result) {
              if(typeof result[key] === 'number') {
                result[key] = Math.round(result[key])
              }
          }

        const { main, icon, temp, feels_like, temp_min, temp_max, pressure, humidity, visibility, speed } = result;
        const rez = {
            mainWeather: { 
                main, icon, temp, feels_like, temp_min, temp_max 
            },
            details: [
                {
                    payload: pressure,
                    title: 'Pressure',
                    icon: '🧱',
                    measure: 'Pa',
                },
                {
                    payload: humidity,
                    title: 'Humidity',
                    icon: '🌡️',
                    measure: '%',
                },
                {
                    payload: visibility,
                    title: 'Visibility',
                    icon: '☁️',
                    measure: 'm',
                },
                {
                    payload: speed,
                    title: 'Speed',
                    icon: '💨',
                    measure: 'm/s',
                },
            ]
        }
        return rez;
    })
}

export default dataHandler;