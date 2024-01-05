<template>
    <el-row type="flex" justify="center">
        <el-form ref="formData" :model="formData"
                 :rules="rules" label-width="80px"
                 @keyup.enter.native="login(formData)"
        >
            <el-form-item prop="account" label="用户名">
                <el-input v-model="formData.username" placeholder="请输入用户名"
                          prefix-icon="icon-login_user" clearable></el-input>
            </el-form-item>
            <el-form-item prop="password" label="密码">
                <el-input v-model="formData.password" placeholder="请输入密码" type="password"
                          prefix-icon="icon-login_pwd" clearable></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" class="btn" @click="login()" icon="el-icon-upload">登录</el-button>
                <el-button @click="resetForm('formData')">重置</el-button>
            </el-form-item>
        </el-form>
    </el-row>
</template>

<script>
import axios from 'axios'
import {setCookie} from "@/util/cookie";

export default {
    name: 'LoginForm',
    data() {
        return {
            formData: {
                username: '',
                password: '',
            },
            rules: {
                username: [{required: true, message: '用户名不能为空', trigger: 'blur'}],
                password: [{required: true, message: '密码不能为空', trigger: 'blur'}]
            },

        };
    },
    methods: {
        login() {
            const that = this
            axios.post('/api/auth/login', {
                "username": this.formData.username,
                "password": this.formData.password
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(function (res) {
                console.log(res.data.data);
                console.log(res.data.data.user.type)
                if (res.data.data.user.type === 0) {
                    // 商家
                    localStorage.setItem("username", res.data.data.user.username)
                    localStorage.setItem("businessId", res.data.data.user.id)
                    that.$router.push('/shopsOfBusiness')
                } else {
                    localStorage.setItem("username", res.data.data.user.username)
                    localStorage.setItem("customerId", res.data.data.user.id)
                    that.$router.push('/shopsOfCustomer')
                }
                setCookie("token",res.data.data.token)
            })
        },

        resetForm(formName) {
            this.$refs[formName].resetFields();
            this.formData.role = ''
        }
    }
};
</script>


