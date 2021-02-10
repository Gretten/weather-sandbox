<template>
    <div class="detail-container">
        <i :class="icon"></i>
        <span class="detail-title"> {{ title }} </span>
        <span class="detail-data"> {{ payload }}{{ measure }} </span>
    </div>
</template>

<script>
    export default {
        name: 'SingleDetail',
        props: ['details'],
        data() {
            const { icon, title, payload, measure } = this.details;
            return {
                icon,
                title,
                payload,
                measure,
            }
        },
    }
</script>

<style lang="scss" scoped>
    .detail-container {
        height: 100px;
        width: 170px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        background: rgba(233, 146, 240, 0.24);
        border-radius: 5px;
        margin-top: 25px;
        transition: 0.3s;
    }

    .detail-container:hover {
        background: rgba(233, 146, 240, 0.54);
    }
</style>