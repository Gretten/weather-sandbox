<template>
    <div 
        class="page-background"
    >
        <Main
            
        > 
        <TitleDisplay 
            :city="city"
            @queried="makeQuery"
        />
            <div
                v-if="uploaded"
            >
                
                <WeatherDisplay 
                    :details="weather.mainWeather"
                />

                <DetailsDisplay 
                    :details="weather.details"

                />      
            </div>
             <Spinner 
                v-if="errorState.isError"
                :error="errorState"
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
                errorState: {},
                uploaded: true,
            }
        },
        methods: {
            makeQuery(val) {
                this.uploaded = false;
                apiInstance.setCity(val);
                apiInstance.getWeather()
                    .then(res => {
                        if(res.isError) {
                           this.errorState = res;
                           return;
                        }
                        this.errorState.isError ? this.errorState = {} : false;
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
        background: rgb(183,195,208);
        background: linear-gradient(0deg, rgba(183,195,207,1) 0%, rgba(236,240,251,1) 100%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>