<template>
    <div>
        {{ msg }}
    </div>
</template>

<script>
    export default {
        name:'Todo',
        data() {
            return {
                title:'todo',
                msg: 'first todo',
            }
        },
        created () {
            console.log('====================================');
            console.log('loaded todo.vue');
            console.log('====================================');
        }
    }
</script> 

<style scoped>

</style>