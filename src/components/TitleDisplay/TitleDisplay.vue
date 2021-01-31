!<template>
    <div>
        <input 
            type="text" 
            v-model="titleInput"
        />
    </div>
</template>

<script>    
    import debounce from '@/assets/functions.js'
    export default {
        name: 'EditableHeader',
        props: ['city'],
        data () {
            return {
                titleInput: this.city,
            }
        },
        methods: {
            changeRenderedText() {
                if(this.titleInput === '') {
                    return
                }
                this.$emit('queried', this.titleInput)
                console.log('im here')
            },        
        },
        created: function() {
            this.debouncedQuery = debounce(this.changeRenderedText, 0)
        },
        watch: {
            titleInput: function() {
                this.debouncedQuery()
            }
        }
        
    };
</script>

<style scoped>
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