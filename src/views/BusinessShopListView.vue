<template>
    <!--商家店铺列表页面 商家登录后可以看到自己的门店 -->
    <el-container height="100%" width="100%">
        <el-header>
            <NavigatorBar/>
        </el-header>
        <div class="box" style="height:100%">
            <el-container style="height: 100%">
                <!--        <el-aside width="200px" style="height: 100%">-->
                <!--          <SideNavigator/>-->
                <!--        </el-aside>-->
                <el-main style="height: 100%">
                    <!--          <router-view/>-->
                    <BusinessShopList/>

                </el-main>
            </el-container>
        </div>

    </el-container>
</template>

<script>
import NavigatorBar from "@/components/NavigatorBar";
import BusinessShopList from "@/components/business/BusinessShopList";
// import SideNavigator from "@/components/business/SideNavigator";
export default {
    name: "BusinessShopListView",
    components: {
        NavigatorBar,
        BusinessShopList,
        // SideNavigator
    },
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