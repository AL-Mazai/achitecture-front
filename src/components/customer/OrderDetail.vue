<template>
    <el-container>
        <el-main>
            <h3 style="color: lightsalmon;">订单详情</h3>
            <div style="margin: 20px;"></div>
            <div class="contactor" style="display: flex;justify-content: space-around">
                <span>收货人: {{ username }}</span>
                <span>联系方式: {{ phone }}</span>
                <span>收货地址: {{ address }}</span>
            </div>
            <el-row >
                <el-col :span="8" >
                    <h4>商家名称: {{ shopName }}</h4>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8" style="margin:0"><h4>商品名称</h4></el-col>
                <el-col :span="8" style="margin:0"><h4>商品数量</h4></el-col>
                <el-col :span="8" style="margin:0"><h4>合计</h4></el-col>
            </el-row>
            <el-row v-for="(item,index) in details.lineItemDto" :key="index">
                <div>
                    <el-col :span="8" style="margin-bottom: 10px;">{{ item.itemName }}</el-col>
                    <el-col :span="8" style="margin-bottom: 10px">{{ item.count }}</el-col>
                    <el-col :span="8" style="margin-bottom: 10px">￥{{ item.totalPrice }}</el-col>
                </div>
            </el-row>

            <el-row style="margin-top: 25px">
                <el-col :span="16">合计: {{ details.totalPrice }}元</el-col>
                <el-col :span="8">
                    <el-button type="success" plain v-if="details.payState===0" @click="pay()"> 支付</el-button>
                    <el-button type="danger" plain @click="dialogVisible1 = true;"> 删除</el-button>
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
            phone: '13099863927',
            address: '云南大学呈贡校区楸院一栋',
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
        pay() {
            const that = this
            axios.get('/customer/pay?orderId=' + this.orderid)
                .then(function (res) {
                    console.log(res.data)
                    that.$message({
                        message: '恭喜你，支付成功! ^-^',
                        type: 'success'
                    })
                    that.$router.push('/allOrdersOfCustomer')
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
                    that.$router.push('/allOrdersOfCustomer')
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
h4{
    //border: 1px red solid;
    text-align: left;
    margin-left: 12vw
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