<template>
    <div>
        <div class="weather-title-container">
            <span> {{ currentIcon }} </span>
            <span>{{ weatherStatus }}</span>
        </div>
        <div class="weather-block">
            <div> 
                <span class="current-temp" >
                     {{ currentTemp }}°
                </span> 
                </div>
            <div class="today-temp-container">
                <div class="today-temp">
                    <span class="morning-temp"> {{ morningTemp }}° C</span>
                    <span class="evening-temp"> {{ eveningTemp }}° C </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WeatherDisplay",
        data() {
            return {
                currentIcon: '☾',
                currentTemp: 23,
                morningTemp: 28,
                eveningTemp: 14,
                weatherStatus: 'Clear'
            }
        },
    }
</script>

<style lang="scss" scoped>
    .weather-title-container {
        font-size: 40px;
        text-align: left;
        padding: 0 0 0 55px;
    }
    .current-temp {
        font-size: 123px;
        text-shadow: 2px -2px #02e7df;
        color: #d7f152;
    }
    .weather-block {
        display: flex;
        padding: 0 27px;
        justify-content: space-around;
    }
    .today-temp-container {
        display: flex;
        align-items: center;
    }
    .today-temp {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 25px;
    }
    .morning-temp {
        padding-bottom: 5px;
        border-bottom: 1px solid #a2a6b8;
        width: max-content;
    }
    .evening-temp {
        padding-top: 10px;
    }
</style>