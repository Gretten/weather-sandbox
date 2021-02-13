<template>
    <div>
        <div class="weather-title-container">
            <!-- <span> {{ icon }} </span> -->
            <span>{{ main }}</span>
        </div>
        <div class="weather-block">
            <div> 
                <span class="current-temp" >
                     {{ temp }}°
                </span> 
                </div>
            <div class="today-temp-container">
                <div class="today-temp">
                    <span class="morning-temp"> {{ temp_min }}° C</span>
                    <span class="evening-temp"> {{ temp_min }}° C </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WeatherDisplay",
        props: ['details'],
        data() {
            const { temp, temp_min, temp_max, main } = this.details;
            return {
                temp,
                temp_min,
                temp_max,
                main,
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
        color: #fdfdfd; 
    }

    .weather-block {
        display: flex;
        padding: 0 27px;
        justify-content: space-around;
    }

    .weather-block:hover {
        animation: pulse 0.5s infinite;
        animation-timing-function: linear; 
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
    
    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.02);
        }
        100% {
            transform: scale(1);
        }
    }
</style>