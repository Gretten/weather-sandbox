const fetch = require('node-fetch');
const APIKey = process.env.VUE_APP_API_KEY;

const getServiceResponse = async (city) => {
    const APILink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`;

    let response = await fetch(APILink);

    if (response.ok) { 
        let json = await response.json();
        return json;
    } else {
       console.log("HTTP-Error: " + response.status);
    }
}

const dataHandler = ( city ) => {
    const json = getServiceResponse(city);
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
                    icon: 'fas fa-water',
                    measure: 'Pa',
                },
                {
                    payload: humidity,
                    title: 'Humidity',
                    icon: 'fas fa-temperature-high',
                    measure: '%',
                },
                {
                    payload: visibility,
                    title: 'Visibility',
                    icon: 'fas fa-cloud',
                    measure: 'm',
                },
                {
                    payload: speed,
                    title: 'Speed',
                    icon: 'fas fa-wind',
                    measure: 'm/s',
                },
            ]
        }
        return rez;
    })
}

export default dataHandler;