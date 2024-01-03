<template>
    <el-row class="tac" style="height: 100%;">
        <el-col>
            <el-menu
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#fff"
                text-color="black"
                active-text-color="#409eff"
                style="height: 100%"
                :router="true"
                default-active="/allorders1"
            >
                <el-menu-item index="/shops1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>返回首页</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="/allorders1">
                    <i class="el-icon-document-copy"></i>
                    <span slot="title">所有订单</span>
                </el-menu-item>
                <el-menu-item index="/unconfirm">
                    <i class="el-icon-document"></i>
                    <span slot="title">未确认订单</span>
                </el-menu-item>
                <el-menu-item index="/already1">
                    <i class="el-icon-document-checked"></i>
                    <span slot="title">已确认订单</span>
                </el-menu-item>
                <el-menu-item index="/refund1">
                    <i class="el-icon-document-delete"></i>
                    <span slot="title">退款订单</span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: "SideNavigator",
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}

</script>

<style scoped>
body, html {
    margin: 0;
    width: 100%;
    height: 100%;
}

.el-col {
    height: 100%;
}

span {
    font-family: "Microsoft YaHei", serif;
    font-weight: bold;
    font-size: 18px;
    color: grey;
}

.el-menu-item {
    margin-top: 30px;
}
</style>