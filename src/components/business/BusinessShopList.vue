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
                            <el-card :body-style="{ padding: '0px', marginBottom: '1px'}" style="margin-bottom: 10px">
                                <img
                                    src="@/assets/img/1.png"
                                    class="image"
                                    alt=""
                                />
                                <div style="padding: 5px;">
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
                                        <el-button type="warning" plain size="small"
                                                   @click="entershoporder(shop.id,shop.name)">查看订单
                                        </el-button>
                                    </div>
                                </div>
                            </el-card>
                    </el-skeleton>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import axios from "axios";
import businessStore from "@/store";

export default {
    name: "ShopList1",
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
            console.log("@", id, name)
            businessStore.businessId = id;
            businessStore.businessName = name
            localStorage.setItem('shopName',businessStore.businessName)
            localStorage.setItem('shopId',businessStore.businessId)
            this.$router.push('/shopinfo1')
        },
        entershoporder(id, name) {
            console.log(id, name)
            businessStore.businessId = id;
            businessStore.businessName = name
            localStorage.setItem('shopName',businessStore.businessName)
            localStorage.setItem('shopId',businessStore.businessId)
            this.$router.push('/allOrdersOfBusiness')
        }
    },
    mounted() {
        axios.get('/shop/getShopByBusinessId?size=8&page=' + this.page + "&businessId=" + localStorage.getItem("businessId"), {
            headers: {
                "Access-Control-Allow-Origin": "*",
            }
        }).then(res => {
            this.shops = res.data.data
            console.log("@", res.data.data)
            this.loading = false;
        })
    }
}

</script>

<style scoped>

</style>