<template>
    <div id="building">
        <div class="main">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>登录</span>
                </div>
                <LoginForm/>
            </el-card>
        </div>
    </div>
    <!--登录页面-->
</template>

<script>
import LoginForm from "@/components/LoginForm";

export default {
    name: "LoginView",
    components: {
        LoginForm
    }
}
</script>

<style scoped>
#building {
    background: url("../assets/bg1.png");
    width: 100%;
    height: 100%;
    position: fixed;
    background-size: 100% 100%;
}

.text {
    font-size: 14px;
    color: black;
}

.item {
    margin-bottom: 18px;
}

.box-card {
    width: 480px;
    opacity: 75%;
}

.main {
    text-align: center;
    border-radius: 20px;
    width: 300px;
    height: 350px;
    position: absolute;
    left: 5%;
    top: 60%;
    transform: translate(-20%, -20%);
}

</style>