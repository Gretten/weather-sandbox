require('dotenv').config({path: '../.env'});
const fetch = require('node-fetch');


const APIKey = process.env.API_KEY;

const getServiceResponse = async (city, key) => {
    const APILink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;

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
        const result = Object.assign({}, ...function _flatten(o) { return [].concat(...Object.keys(o).map(k => typeof o[k] === 'object' ? _flatten(o[k]) : ({[k]: o[k]})))}(res))

        const { main, icon, temp, feels_like, temp_min, temp_max, pressure, humidity, visibility, speed } = result;
    
        return console.log( {
            mainWeather: { 
                main, icon, temp, feels_like, temp_min, temp_max 
            },
            details: { 
                pressure, humidity, visibility, speed 
            },
        })
    })
}

export default dataHandler;