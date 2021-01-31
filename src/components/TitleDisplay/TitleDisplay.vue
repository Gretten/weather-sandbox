!<template>
    <div>
        <input 
            type="text" 
            v-model="titleInput"
            @blur="changeRenderedText"
        />
    </div>
</template>

<script>    
    export default {
        name: 'EditableHeader',
        props: ['city'],
        data () {
            return {
                titleInput: this.city,
            }
        },
        methods: {
            changeRenderedText(e) {
                const value = e.target.value;
                if(value === '') {
                    return
                }
                this.titleInput = value
                this.$emit('queried', value)
            },        
        }
        
    };
</script>

<style lang="scss" scoped>
    input {
        margin: 0;
        padding: 10px;
        color: #fff;
        background: rgba(0,0,0,.1);
        border: none;
        text-align: center;
        font-size: 23px;
        border-radius: 10px;
    }
    input:focus {
        border: none;
        outline: none;
    }

</style>