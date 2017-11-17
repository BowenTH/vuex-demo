<template>
    <div id="footer" class="footer">
        <button @click="upDateTime">time</button>
        <span>{{ auther }}</span> <br>
        <span>{{ time.toTimeString() }}</span>
    </div>
</template>

<script>
    import store from "@/store/store"
    import { mapState,mapMutations, mapGetters ,mapActions} from "vuex"

    export default {
        name:'Footers',
        data() {
            return {
                auther:"光脚科技",
                // time: new Date().toTimeString()
            }
        },
        computed: {
            ...mapState([ 'time' ])
        },
        methods: {
            ...mapMutations([ 'upDateTime' ])
        },
        mounted () {
            this.$store.commit('upDateTime','footer')
            // this.upDateTime()
       }
    }
</script>

<style scoped>
.footer{
    position: absolute;
    bottom: 10px;
    left: 30%;
    font-size: 13px;
    color: grey;
}
</style>