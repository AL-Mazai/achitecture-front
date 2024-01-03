<template>
    <!--商家店铺订单列表页面 可以查看门店的所有订单，并可以选择 “确认” or "退款"-->
    <el-container height="100%" width="100%">
        <el-header>
            <NavigatorBar/>
        </el-header>
        <div class="box" style="height:100%">
            <el-container style="height: 100%">
                <el-aside width="200px" style="height: 100%">
                    <SideNavigator/>
                </el-aside>
                <el-main style="height: 100%">
                    <router-view/>
                </el-main>
            </el-container>
        </div>

    </el-container>
</template>

<script>
import NavigatorBar from "@/components/NavigatorBar";
import SideNavigator from "@/components/business/SideNavigator";

export default {
    name: "BusinessShopOrderView",
    components: {
        NavigatorBar,
        SideNavigator,
    }
}
</script>

<style scoped>
.el-header {
    padding: 0;
    margin: 0;
}

body, html {
    margin: 0;
    width: 100%;
    height: 100%;
}

.el-container {
    height: 100%;
}

.box {
    height: 100%;
}
</style>