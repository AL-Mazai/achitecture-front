<template>
    <!--某个商家上架了的商品列表-->
    <div class="container">
        <el-row :gutter="20" style="margin-top: 0;padding-top: 0">
            <el-col :span="12">
                <div class="grid-content bg-purple-light">
                    <el-row :gutter="0" style="padding: 20px" v-for="(item,index) in product" :key="index">
                        <div>
                            <el-col :span="8">
                                <img src="@/assets/img/9.png" alt=""></el-col>
                            <el-col :span="8" style="display: flex;flex-direction: column">
                                <br/>
                                <span>商品名称: {{ item.name }}</span>
                                <br/>
                                <span>商品描述: {{ item.description }}</span>
                                <br/>
                                <span>商品价格: ￥{{ item.price }}</span>
                                <br/>
                            </el-col>
                            <el-col :span="8"  style="text-align: left">
                                <br/>
                                <br/>
                                <br/>
                                <el-button type="info" size="mini" icon="el-icon-minus" circle
                                           @click="()=>{if(item.count>0){item.count--;total -= item.price;quantity--} }">
                                </el-button>
                                <span>
                                    {{ item.count }}
                                </span>
                                <el-button type="primary" size="mini" icon="el-icon-plus" circle
                                           @click="item.count++;total += item.price;quantity++">

                                </el-button>
                                <br/>
                            </el-col>
                        </div>
                    </el-row>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple-light">
                    <el-row>
                        <el-col :span="8" style="margin:0"><h4>商品名称</h4></el-col>
                        <el-col :span="8" style="margin:0"><h4>商品数量</h4></el-col>
                        <el-col :span="8" style="margin:0"><h4>合计</h4></el-col>
                    </el-row>
                    <el-row v-for="(item,index) in product" :key="index">
                        <div v-show="item.count!==0">
                            <el-col :span="8" v-if="item.count!==0" style="margin-bottom: 10px;">
                                {{ item.name }}
                            </el-col>
                            <el-col :span="8" v-if="item.count!==0" style="margin-bottom: 10px">
                                {{ item.count }}
                            </el-col>
                            <el-col :span="8" v-if="item.count!==0" style="margin-bottom: 10px">
                                ￥{{ item.count * item.price }}
                            </el-col>
                        </div>
                    </el-row>
                    <el-empty v-if="total===0" description="购物车空空如也~"></el-empty>

                    <div style="padding: 0;margin: 0">
                        <el-row type="flex" class="row-bg" justify="space-around">
                            <el-col :span="14">
                                <el-badge :value="quantity" class="item">
                                    <el-button type="warning" icon="el-icon-shopping-cart-full" circle></el-button>
                                </el-badge>
                                <span style="margin-left: 10px">我的购物车</span>
                            </el-col>
                            <el-col :span="10">￥{{ total }}
                                <el-button type="warning" plain style="margin-left: 20px" @click="enterorder()">去支付
                                </el-button>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "ItemList",

    data() {
        return {
            size: '',
            total: 0,
            quantity: 0,
            product: [],
            item: [],
        };
    },
    methods: {
        // 创建订单
        enterorder() {
            const that = this
            let cart = {
                customerId: localStorage.getItem("customerId"),
                shopId: localStorage.getItem("shopId"),
                totalPrice: 0,
                list: [],
            }

            console.log("product:")
            console.log(this.product)
            // 直接构建row
            console.log("循环前的cart")
            console.log(cart)
            for (let i = 0, j = 0; i < this.product.length; i++) {
                let row = {
                    count: 0,
                    item: {
                        id: 0
                    },
                    totalPrice: 0
                }
                if (this.product[i].count !== 0) {
                    row.count = this.product[i].count
                    row.item.id = this.product[i].id
                    row.totalPrice = this.product[i].count * this.product[i].price
                    cart.totalPrice += row.totalPrice
                    cart.list[j] = row
                    console.log("cart.list" + j)
                    console.log(cart.list[j])
                    j++
                }
                console.log("cart:")
                console.log(cart)
            }
            axios.post('/customer/addOrder', cart).then(function (res) {
                console.log(res.data)
                if (res.data.code === true) {
                    that.$router.push({
                        name: 'orderinfo',
                        params: {
                            pro: that.product,
                            sum: that.total,
                            orderid: res.data.data.id
                        }
                    })
                }
            })

        },
    },

    mounted() {
        axios.get('/shop/getShopItemState1?shopId=' + localStorage.getItem("shopId"))
            .then((res) => {
                console.log("进入商家界面：", res.data)
                for (let i = 0; i < res.data.data.length; i++) {
                    // console.log(res.data.data[i])
                    this.product.push(res.data.data[i])
                    this.product[i].count = 0
                }
                console.log(this.product)
            })
    },


}
</script>

<style scoped>
.container {
    height: 100%;
}

img {
    width: 150px;
    height: 150px;
    border-radius: 10px;
}
span{
    //border: 1px solid red;
    text-align: left;
    //margin-left: 5vw;
}
.el-main {
    padding: 0 !important;
}

.el-row {
    padding-bottom: 0 !important;
    padding-top: 0 !important;
    margin: 0;
    height: 100%;

}


.el-col {
    margin-top: 20px;
    border-radius: 4px;
}

.bg-purple-dark {
    background: #f9fafc;
}

.bg-purple {
    background: #f9fafc;
}

.bg-purple-light {
    background: #f9fafc;
}

.grid-content {
    border-radius: 4px;
    height: 100%;
}

.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}
</style>