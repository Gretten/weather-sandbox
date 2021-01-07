<template>
    <div class="detail-container">
        <span class="detail-icon"> {{ detailIcon }} </span>
        <span class="detail-title"> {{ detailTitle }} </span>
        <span class="detail-data"> {{ detailData }} </span>
    </div>
</template>

<script>
    export default {
        name: 'SingleDetail',
        data() {
            return {
                detailIcon: '☀',
                detailTitle: 'Feels like',
                detailData: '22°',
            }
        },
    }
</script>

<style lang="scss" scoped>
    .detail-container {
        height: 108px;
        width: 108px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: rgba(233, 146, 240, 0.24);
        border-radius: 5px;
        margin-top: 25px;
    }
</style>