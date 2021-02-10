<template>
    <div class="main">
         <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Main",
    }
</script>

<style scoped>
    .main {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: rgb(150,98,162);
        background: linear-gradient(0deg, rgba(150,98,162,1) 0%, rgb(22, 55, 121) 100%);
        max-width: 364px;
        min-height: 647px;
        padding: 25px;
    }
        
</style>