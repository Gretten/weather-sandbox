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
            <Spinner 
                v-else
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
    import Spinner from '@/components/Spinner/Spinner.vue';
    import dataHandler from '@/api/api.js';

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
                uploaded: false,
            }
        },
        methods: {
            makeQuery(val) {
                this.uploaded = false;
                dataHandler(val)
                    .then(res => {
                        this.weather = res;
                        this.uploaded = true;
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
        background: rgb(183,195,207);
        background: linear-gradient(0deg, rgba(183,195,207,1) 0%, rgba(236,240,251,1) 100%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>