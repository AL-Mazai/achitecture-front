<template>
    <!--顾客店铺页面  顾客点进门店后，可以在这里挑选商品-->
    <el-container>
        <el-header>
            <NavigatorBar/>
        </el-header>
        <el-main>
            <ItemList/>
        </el-main>

    </el-container>

</template>

<script>
import NavigatorBar from "@/components/NavigatorBar";
import ItemList from "@/components/ItemList";

export default {
    name: "CustomerShopInfoView",
    data() {
        return {}

    },
    components: {
        NavigatorBar,
        ItemList,
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