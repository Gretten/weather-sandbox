<template>
    <div>
        <div class="container">
            <span class="header">
                {{ this.header }}
            </span>
            <div class="border"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LinedHeader",
        props: ['header'],
    }
</script>

<style lang="scss" scoped>
    .container {
        display: flex;
        flex-direction: row;
    }

    .header {
        display: block;
    }
    
    .border {
        display: block;
        border-bottom: 1px solid #a2a6b8;
        width: 100%;
        margin-bottom: 9px;
        margin-left: 10px;
    }
</style>