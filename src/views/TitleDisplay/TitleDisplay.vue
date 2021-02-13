!<template>
    <div>
        <input 
            type="text" 
            v-model="titleInput"
            @keyup="keyupTrigger"
        />
    </div>
</template>

<script>    
    import debounce from 'debounce';
    
    export default {
        name: 'EditableHeader',
        props: ['city'],
        data () {
            return {
                titleInput: this.city,
            }
        },
        created: function() {
            this.debouncedQuery = debounce(() => {
                this.$emit('queried', this.titleInput)
            }, 500)
        },
        methods: {
            keyupTrigger() {
                this.debouncedQuery()
            }     
        },
        
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