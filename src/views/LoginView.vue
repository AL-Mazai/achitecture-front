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
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
}

.text {
    font-size: 14px;
    color: black;
}

.item {
    margin-bottom: 18px;
}

.box-card {
    //width: 480px;

    //border: 1px solid red;
}

.main {
    text-align: center;
    border-radius: 20px;
}

</style>