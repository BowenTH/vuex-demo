<template>
    <el-col id="login" type="flex">
        <el-row class="middle">
            <el-col :span="5" justify="left">2</el-col> 
            <el-col :span="5" justify="center">2</el-col> 
            <h1>sss</h1>
            <el-input
                placeholder="请输入用户名"
                v-model="username">
                <i slot="prefix" class="el-input__icon el-icon-picture"></i>
            </el-input>
            <el-input
                placeholder="请输入密码"
                v-model="password">
                <i slot="prefix" class="el-input__icon el-icon-loading"></i>
            </el-input>
            <el-button>ssss</el-button>   
        </el-row>
        <el-col class="bottom info">
            <el-button type="primary" round>登录</el-button>
        </el-col>
    </el-col>
</template>

<script>
    export default {
        data() {
            return {
                msg: '一方生活',
                username:'',
                password:'',
            }
        },
    }
</script>

<style lang="less" scoped>
@import '../common/less/bass.less';

#login{
    margin: 50px 0;
    text-algin:center;
    .middle{
        .input-group{
            background-color: rgba(220, 223, 224, 0.5);
            margin: 5px 0;
        }
    }
    .bottom{
        // background-color: @Warning;
    }
}


</style>
