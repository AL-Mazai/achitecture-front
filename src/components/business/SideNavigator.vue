<template>
    <el-row class="tac" style="height: 100%;">
        <el-col>
            <el-menu
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                style="height: 100%"
                :router="true"
                default-active="/allOrdersOfBusiness"
            >
                <el-menu-item index="/shopsOfBusiness">
                    <i class="el-icon-location"></i>
                    <span>返回首页</span>
                </el-menu-item>
                <el-menu-item index="/allOrdersOfBusiness">
                    <i class="el-icon-document-copy"></i>
                    <span slot="title">所有订单</span>
                </el-menu-item>
                <el-menu-item index="/unconfirm">
                    <i class="el-icon-document"></i>
                    <span slot="title">未确认订单</span>
                </el-menu-item>
                <el-menu-item index="/confirm">
                    <i class="el-icon-document-checked"></i>
                    <span slot="title">已确认订单</span>
                </el-menu-item>
                <el-menu-item index="/refundOfBusiness">
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

}

.el-menu-item {
    margin-top: 20px;
    text-align: left;
}
</style>