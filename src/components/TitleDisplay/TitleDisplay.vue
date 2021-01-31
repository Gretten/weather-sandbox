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
                titleInput: '',
                renderedText: 'Hello Vue',
                editing: false,
            }
        },
        methods: {
            changeRenderedText(e) {
                const value = e.target.value;
                if(value === '') {
                    this.renderedText = 'Put the value'
                    this.editing = false
                    return
                }
                this.renderedText = e.target.value
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

</style>