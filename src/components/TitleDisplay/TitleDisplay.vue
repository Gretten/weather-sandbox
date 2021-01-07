<template>
    <div class="component-container">
        <div class="title-container">
            <span class="city">{{ cityName }}</span>
            <span class="date">{{ currentDate }}, {{ currentTime }}</span>
        </div>

    </div>
</template>

<script>
    export default {
        name: "TitleDisplay",
        data() {
            return {
                cityName: 'Hong Kong',
                currentDate: 'Mon',
                currentTime: '1:20 am'
            }
        },
    }
</script>

<style scoped>
    .component-container {
        display: flex;
        justify-content: center;
    }
    .title-container {
        display: flex;
        flex-direction: column;
    }
    .city {
        font-size: 25px;
        padding-bottom: 10px;
    }
    .date {
        color: #a2a6b8;
    }
</style>