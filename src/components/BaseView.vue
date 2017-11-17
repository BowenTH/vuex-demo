<template>
    <div class="baseView">
        <h4><i>{{msg}}</i></h4>
    </div>
</template>

<script>
    export default {
        name:'BaseView',
        data() {
            return {
                msg: 'Base View'
            }
        },
        created () {
            console.table([{ name:'BaseView',msg:'this.msg' },{ name:'BaseView',msg:this.msg }])
        }
    }
</script>

<style scoped>
.baseView{
    color: green;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>