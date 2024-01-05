<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="6" v-for="shop in shops" :key="shop.id">
                <div style="width: 240px">
                    <el-skeleton
                        style="width: 240px"
                        :loading="loading"
                        animated
                        :throttle="500"
                    >
                        <template>
                            <el-card :body-style="{ padding: '0px', marginBottom: '1px'}">
                                <img
                                    src="@/assets/img/1.png"
                                    class="image"
                                    alt=""
                                />
                                <div style="padding: 14px;">
                                    <div
                                        style="font-family: 'PingFang SC',serif;font-weight: bold;font-size: 20px">
                                        {{ shop.name }}
                                    </div>
                                    <div class="time" style="font-size: 14px;color: #e5e9f2;margin-bottom: 1vh">
                                        ( {{ shop.description }} )
                                    </div>
                                    <div class="bottom card-header">
                                        <el-button type="primary" plain size="small"
                                                   @click="entershop(shop.id,shop.name)">进入商店
                                        </el-button>
                                    </div>
                                </div>
                            </el-card>
                        </template>
                    </el-skeleton>
                </div>
            </el-col>
        </el-row>
    </div>


</template>

<script>
import axios from 'axios'
import {businessStore} from "@/store";

export default {
    name: "ShopList",
    data() {
        return {
            loading: true,
            currentDate: '2023-01-01',
            shops: '',
            page: 0,
            size: '',
        }
    },
    methods: {
        entershop(id, name) {
            console.log(id, name)
            businessStore.businessId = id;
            businessStore.businessName = name
            localStorage.setItem('shopName', businessStore.businessName)
            localStorage.setItem('shopId', businessStore.businessId)
            this.$router.push('/shopinfo')
        }
    },
    mounted() {
        axios.get('/shop/getAllShop/?size=8&page=' + this.page, {
            headers: {
                "Access-Control-Allow-Origin": "*",
            }
        }).then(res => {
            this.shops = res.data.data
            console.log("用户界面商家列表：", res.data.data)
            this.loading = false;
        })
    }
}

</script>

<style scoped>
.el-row {
    margin-bottom: 20px;
}

.el-col {
    border-radius: 4px;
    margin-top: 30px;
}

.bg-purple-dark {
    background: #99a9bf;
}

.bg-purple {
    background: #d3dce6;
}

.bg-purple-light {
    background: #e5e9f2;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}
</style>