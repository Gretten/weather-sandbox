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
    span, input {
        margin: 0;
        padding: 10px;
        color: #fff;
    }
    span {
        font-size: 25px;
    }
    input {
        background: rgba(0,0,0,.1);
        border: none;
        text-align: center;
        font-size: 23px;

    }
    input:focus {
       outline: none;
    }
</style>