!<template>
    <div>
        <input 
            type="text" 
            v-model="titleInput"
            v-if="editing"
            @blur="changeRenderedText"
        />
        <span
            @click="showInput"
            v-else
        >{{ renderedText }}
        </span>
    </div>
</template>

<script>    
    export default {
        name: 'EditableHeader',
        data () {
            return {
                titleInput: 'Moscow',
                renderedText: 'Moscow',
                editing: false,
            }
        },
        methods: {
            changeRenderedText(e) {
                const value = e.target.value;
                if(value === '') {
                    this.renderedText = 'Put the city...'
                    this.editing = false
                    return
                }
                this.renderedText = value
                this.titleInput = value
                this.editing = false
                this.$emit('queried', value)
            },
            showInput() {
                this.editing = true
            }
        }
        
    };
</script>

<style lang="scss" scoped>
    span, input {
        margin: 0;
        padding: 10px;
        font-size: 25px;
        color: #fff;
    }
    input {
        background: rgba(0,0,0,.1);
        border: none;
        text-align: center;

    }
    input:focus {
       outline: none;
    }
</style>