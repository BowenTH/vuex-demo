<template>
    <div>
        {{msg}}
    </div>
</template>

<script>
    export default {
        name:'Vuex',
        data() {
            return {
                msg: 'first Vuex'
            }
        },
        mounted () {
            this.$store.commit('upDateTime','vuex');
        }
    }
</script>

<style scoped>

</style>