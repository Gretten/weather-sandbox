const fetch = require('node-fetch');

const city = 'Moscow';
const APIKey = 'a0408c4d5fded32e057194a7540e3f41';


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

// todo: create a reference between the first function and the second

const dataHandler = ( json ) => {
    const target = JSON.parse(json);

    const res = Object.assign({}, ...function _flatten(o) { return [].concat(...Object.keys(o).map(k => typeof o[k] === 'object' ? _flatten(o[k]) : ({[k]: o[k]})))}(target))

    const { main, icon, temp, feels_like, temp_min, temp_max, pressure, humidity, visibility, speed } = res;

    return {
        mainWeather: { main, icon, temp, feels_like, temp_min, temp_max },
        details: { pressure, humidity, visibility, speed }
    }
}