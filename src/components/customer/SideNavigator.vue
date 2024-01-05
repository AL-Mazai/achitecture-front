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
                default-active="/shopsOfCustomer"
            >
                <el-menu-item index="/shopsOfCustomer">
                    <template slot="title">
                        <i class="el-icon-goods"></i>
                        <span>商店列表</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="/allOrdersOfCustomer">
                    <i class="el-icon-document-copy"></i>
                    <span slot="title">所有订单</span>
                </el-menu-item>
                <el-menu-item index="/unpay">
                    <i class="el-icon-document"></i>
                    <span slot="title">未支付订单</span>
                </el-menu-item>
                <el-menu-item index="/payOrder">
                    <i class="el-icon-document-checked"></i>
                    <span slot="title">已支付订单</span>
                </el-menu-item>
                <el-menu-item index="/refundOfCustomer">
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