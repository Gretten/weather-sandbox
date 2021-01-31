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
                :details="this.weather.mainWeather"
            />
            <DetailsDisplay 
                :details="this.weather.details"

            />
        </Main>
    </div>
</template>

<script>
    import Main from '@/components/Main.vue';
    import TitleDisplay from '@/components/TitleDisplay/TitleDisplay.vue';
    import WeatherDisplay from '@/components/WeatherDisplay/WeatherDisplay.vue';
    import DetailsDisplay from '@/components/DetailsDisplay/DetailsDisplay.vue';
    import dataHandler from '@/api/api.js';

    export default {
        name: "Page",
        components: {
            Main,
            TitleDisplay,
            WeatherDisplay,
            DetailsDisplay,
        },
        data() {
            return {
                city: 'Moscow',
                weather: {},
                uploaded: false,
            }
        },
        methods: {
            makeQuery(val) {
                this.uploaded = false;
              dataHandler(val)
                .then(res => {
                    console.log(this)
                    this.weather = res;
                    this.uploaded = true;
                })
            }
        },
        created: function() {
            dataHandler(this.city)
                .then(res => {
                    this.weather = res;
                    this.uploaded = true;
                })
        }

    }
</script>

<style scoped>
    .page-background {
        height: 100vh;
        background: rgb(183,195,207);
        background: linear-gradient(0deg, rgba(183,195,207,1) 0%, rgba(236,240,251,1) 100%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>