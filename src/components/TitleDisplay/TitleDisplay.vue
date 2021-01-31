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
        props: ['city'],
        data () {
            return {
                titleInput: this.city,
                renderedText: this.city,
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