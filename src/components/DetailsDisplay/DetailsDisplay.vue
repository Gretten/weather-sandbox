<template>
    <div>
       <LinedHeader />
       <div class="details-container"
       >
           <SingleDetail 
                v-for="item in this.details"
                :key="item.payload"
                :details="item"
           />
        </div>
    </div>
</template>

<script>
    import LinedHeader from '@/components/LinedHeader/LinedHeader.vue';
    import SingleDetail from '@/components/SingleDetail/SingleDetail.vue';
    export default {
        name: "DetailsDisplay",
        props: ['details'],
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