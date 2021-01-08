const city = 'Moscow';
const APIKey = 'a0408c4d5fded32e057194a7540e3f41';

const getServiceResponse = async (city, key) => {
    const APILink = `api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;
    const responsePromise = await fetch(APILink);
    if(responsePromise.ok) {
        let json = responsePromise.json();
        console.log(json)
    }
}

getServiceResponse(city, APIKey)