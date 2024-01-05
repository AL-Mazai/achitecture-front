<template>
    <el-container>
        <el-main>
            <h3 style="color: lightsalmon;font-style: italic">订单详情</h3>
            <div style="margin: 20px;"></div>
            <div class="contactor" style="display: flex;justify-content: space-around">
                <span>收货人: {{ username }}</span>
                <span>联系方式: {{ phone }}</span>
                <span>收货地址: {{ address }}</span>
            </div>
            <div class="orderinfo">
                <h4>商家名称: {{ shopName }}</h4>
            </div>
            <el-row>
                <el-col :span="8" style="margin:0"><h4>商品名称</h4></el-col>
                <el-col :span="8" style="margin:0"><h4>商品数量</h4></el-col>
                <el-col :span="8" style="margin:0"><h4>合计</h4></el-col>
            </el-row>
            <el-row v-for="(item,index) in details.lineItemDto" :key="index">
                <div>
                    <el-col :span="8" style="margin-bottom: 10px;">{{ item.itemName }}</el-col>
                    <el-col :span="8" style="margin-bottom: 10px">{{ item.count }}</el-col>
                    <el-col :span="8" style="margin-bottom: 10px">￥{{ item.totalPrice }}
                    </el-col>
                </div>
            </el-row>
            <el-row style="margin-top: 25px">
                <el-col :span="16">合计: {{ details.totalPrice }}元</el-col>
                <el-col :span="8">
                    <el-button type="danger" plain v-if="details.state === 1 && details.payState===1" @click="refund()">
                        退款
                    </el-button>
                    <el-button type="danger" plain v-else-if="details.state === 2" @click="dialogVisible1 = true;"> 删除订单
                    </el-button>
                    <el-button type="success" plain v-else @click="confirm()"> 确认订单</el-button>

                </el-col>
            </el-row>
        </el-main>
        <el-dialog
            title="提示"
            :visible.sync="dialogVisible1"
            width="30%">
            <span>确认删除订单?</span>
            <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible1 = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible1 = false;cancel()">确 定</el-button>
  </span>
        </el-dialog>
    </el-container>
</template>

<script>
import axios from "axios";

export default {
    name: "OrderDetail",
    setup() {
    },
    data() {
        return {
            shopName: localStorage.getItem('shopName'),
            username: 'zzw',
            phone: '15877712345',
            address: '云南大学',
            labelPosition: 'right',
            dialogVisible: false,
            dialogVisible1: false,
            total: '',
            details: {
                businessName: '',
                createDate: '',
                customerName: '',
                id: '',
                lineItemDto: [],
                payState: '',
                shopName: '',
                state: '',
                totalPrice: ''
            },
            orderid: '',
            formLabelAlign: {
                name: '',
                region: '',
                type: '',
            },
            product: [],
        };
    },
    methods: {
        confirm() {
            const that = this
            axios.put('/shop/acceptOrder', {
                "orderId": this.orderid
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
                .then(function (res) {
                    console.log(res.data)
                    if (res.data.code === true) {
                        that.$message({
                            message: '已确认该订单!',
                            type: 'success'
                        })
                        that.$router.push('/confirm')
                    } else {
                        that.$message({
                            message: '该用户尚未支付，等待用户支付后方可确认！',
                            type: 'error'
                        })
                        that.$router.push('/allOrdersOfBusiness')
                    }
                })
        },
        refund() {
            const that = this
            axios.put('/shop/refuseOrder', {
                "orderId": this.orderid
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(function (res) {
                console.log(res.data)
                if (res.data.code === true) {
                    that.$message({
                        message: '退款成功!',
                        type: 'success'
                    })
                    that.$router.push('/refundOfBusiness')
                }
            })
        },
        cancel() {
            const that = this
            axios.get('/customer/deleteOrder?orderId=' + this.orderid)
                .then(function (res) {
                    console.log(res.data)
                    console.log(that.orderid)
                    that.$message({
                        message: "已删除该订单^-^",
                        type: 'error'
                    })
                    that.$router.push('/allOrdersOfBusiness')
                })
        }

    },
    mounted() {
        const that = this
        this.orderid = this.$route.params.detail.id
        // 根据orderid查订单详情
        axios.get('/customer/getOrderById?orderId=' + this.orderid)
            .then(function (res) {
                that.details = res.data.data
            })
        // this.details = this.$route.params.detail
        console.log(this.details)
        console.log(this.product)
        console.log("orderid:")
        console.log(this.orderid)
    }
}
</script>

<style scoped>
span {
    padding: 10px
}

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