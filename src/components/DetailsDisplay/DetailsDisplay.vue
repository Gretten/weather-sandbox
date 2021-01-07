<template>
    <div>
       <LinedHeader />
       <div class="details-container">
           <SingleDetail />
           <SingleDetail />
           <SingleDetail />
           <SingleDetail />
           <SingleDetail />
           <SingleDetail />
       </div>
    </div>
</template>

<script>
    import LinedHeader from '@/components/LinedHeader/LinedHeader.vue';
    import SingleDetail from '@/components/SingleDetail/SingleDetail.vue';
    export default {
        name: "DetailsDisplay",
        components: {
            LinedHeader,
            SingleDetail
        }
    }
</script>

<style lang="scss" scoped>
    .details-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>