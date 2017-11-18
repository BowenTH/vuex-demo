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
    }
</script> 

<style scoped>

</style>