<template>
    <!--商家店铺页面 商家可以上架商品，也可以新建商品-->
    <div>
        <el-container>
            <el-header>
                <NavigatorBar/>
            </el-header>
            <el-main>
                <ShopItemList/>
            </el-main>

        </el-container>

    </div>
</template>

<script>
import NavigatorBar from "@/components/NavigatorBar";
import ShopItemList from "@/components/business/ShopItemList";

export default {
    name: "BusinessShopInfoView",
    components: {
        NavigatorBar,
        ShopItemList
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