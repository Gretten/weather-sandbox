<template>
    <div 
        class="page-background"
    >
        <Main> 
            <TitleDisplay 
                :city="city"
                @queried="makeQuery"
            />
            <WeatherDisplay 
                v-if="uploaded"
                :details="weather.mainWeather"
            />
            <Spinner 
                v-else
            />
            <DetailsDisplay 
                :details="weather.details"

            />
        </Main>
    </div>
</template>

<script>
    import Main from '@/views/Main.vue';
    import TitleDisplay from '@/views/TitleDisplay/TitleDisplay.vue';
    import WeatherDisplay from '@/views/WeatherDisplay/WeatherDisplay.vue';
    import DetailsDisplay from '@/views/DetailsDisplay/DetailsDisplay.vue';
    import Spinner from '@/components/Spinner/Spinner.vue';
    import apiInstance from '@/api/api.js';

    export default {
        name: "Page",
        components: {
            Main,
            TitleDisplay,
            WeatherDisplay,
            DetailsDisplay,
            Spinner,
        },
        data() {
            return {
                city: 'Moscow',
                weather: {},
                uploaded: true,
            }
        },
        methods: {
            makeQuery(val) {
                this.uploaded = false;
                apiInstance.setCity(val);
                apiInstance.getResultData()
                    .then(res => {
                        if(!res) return;
                        this.weather = res
                        this.uploaded = true
                    })

            }
        },
        created: function() {
                this.makeQuery(this.city)
        }

    }
</script>

<style scoped>
    .page-background {
        height: 100vh;
        background: rgb(183,195,208);
        background: linear-gradient(0deg, rgba(183,195,207,1) 0%, rgba(236,240,251,1) 100%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>