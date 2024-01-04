<template>
    <!--某个商家上架了的商品列表-->
    <div>
        <el-row>
            <el-button type="primary" icon="el-icon-plus"
                       style="float: left"
                       @click="dialogFormVisible = true"
            >新建商品
            </el-button>
        </el-row>

        <el-dialog title="新增商品" :visible.sync="dialogFormVisible" width="30%">
            <el-form :model="form">
                <el-form-item label="名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" placeholder="请填入名称"></el-input>
                </el-form-item>
                <el-form-item label="描述" :label-width="formLabelWidth">
                    <el-input v-model="form.description" placeholder="请添加描述"></el-input>
                </el-form-item>
                <el-form-item label="价格" :label-width="formLabelWidth">
                    <el-input v-model="form.price" placeholder="请添加描述"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="addItem()">确 定</el-button>
            </div>
        </el-dialog>

        <el-row :gutter="20">
            <el-col :span="12">
                <div class="grid-content bg-purple-light">
                    <h3>已上架</h3>
                    <hr>
                    <el-row :gutter="0" style="padding: 20px" v-for="(item,index) in product_up" :key="index">
                        <div>
                            <el-col :span="8">
                                <img src="@/assets/img/3.png" alt="">
                            </el-col>
                            <el-col :span="8" style="display: flex;flex-direction: column">
                                <br/>
                                <span>商品名称: {{ item.name }}</span>
                                <br/>
                                <span>商品描述: {{ item.description }}</span>
                                <br/>
                                <span>商品价格: ￥{{ item.price }}</span>
                                <br/>
                            </el-col>
                            <el-col :span="8">
                                <br/>
                                <br/>
                                <br/>
                                <el-button type="warning" @click="down(item.id)">下架</el-button>
                                <br/>
                            </el-col>
                        </div>
                    </el-row>
                </div>
            </el-col>

            <el-col :span="12">
                <div class="grid-content bg-purple-light">
                    <h3>未上架</h3>
                    <hr>
                    <el-row :gutter="0" style="padding: 20px" v-for="(item,index) in product_down" :key="index">
                        <div>
                            <el-col :span="8">
                                <img
                                    src="@/assets/img/3.png" alt="">
                            </el-col>
                            <el-col :span="8" style="display: flex;flex-direction: column">
                                <br/>
                                <span>商品名称: {{ item.name }}</span>
                                <br/>
                                <span>商品描述: {{ item.description }}</span>
                                <br/>
                                <span>商品价格: ￥{{ item.price }}</span>
                                <br/>
                            </el-col>
                            <el-col :span="8">
                                <br/>
                                <br/>
                                <br/>
                                <el-button type="primary" @click="up(item.id)">上架</el-button>
                                <br/>
                            </el-col>
                        </div>
                    </el-row>
                </div>
            </el-col>
        </el-row>

    </div>

</template>

<script>
import axios from 'axios';

export default {
    name: "ItemList",
    inject: ['reload'],
    data() {
        return {
            size: '',
            total: 0,
            quantity: 0,
            product_up: [],
            product_down: [],
            item: [],
            dialogFormVisible: false,
            form: {
                name: '',
                description: '',
                price: '',
            },
            formLabelWidth: '100px'
        };
    },
    methods: {
        addItem() {
            const that = this
            let req = {
                shopId: 1,
                item: {}
            }
            req.item = this.form
            axios.post('/shop/addItem', req)
                .then(function (res) {
                    // console.log(res.data)
                    if (res.data.flag === true) {
                        that.dialogFormVisible = false;
                        that.$message({
                            message: '添加成功',
                            type: 'success'
                        })
                    } else {
                        that.$message({
                            message: '添加失败,请稍后再试',
                            type: 'error',
                        })
                    }
                })
            that.reload()
        },
        up(val) {
            const that = this
            axios.put('/shop/saleItem', {
                "shopId": 1,
                "itemId": val
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(function (res) {
                if (res.data.flag === true) {
                    that.$message({
                        message: '商品上架成功!',
                        type: 'success',
                    })
                } else {
                    that.$message({
                        message: '商品上架失败!',
                        type: 'error',
                    })
                }
                that.reload()
                // console.log(res.data)
            })
            // console.log(val)
        },
        down(val) {
            const that = this
            axios.put('/shop/stopSale', {
                "shopId": 1,
                "itemId": val
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(function (res) {
                console.log(res.data)
                if (res.data.flag === true) {
                    that.$message({
                        message: '商品下架成功!',
                        type: 'success',
                    })
                } else {
                    that.$message({
                        message: '商品下架失败!',
                        type: 'error',
                    })
                }
            })
            that.reload()
            // console.log(val)
        }

    },

    mounted() {
        //上架商品
        axios.get('/shop/getShopItemState1?shopId=' + localStorage.getItem("shopId"))
            .then((res) => {
                console.log(res.data)
                for (let i = 0; i < res.data.data.length; i++) {
                    console.log(res.data.data[i])
                    this.product_up.push(res.data.data[i])
                    this.product_up[i].count = 0
                }
                console.log(this.product_up)
            })

        //未上架商品
        axios.get('/shop/getShopItemState0?shopId=' + localStorage.getItem("shopId"))
            .then((res) => {
                console.log(res.data)
                for (let i = 0; i < res.data.data.length; i++) {
                    console.log(res.data.data[i])
                    this.product_down.push(res.data.data[i])
                    this.product_down[i].count = 0
                }
                console.log(this.product_down)
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
    margin-left: 5vw;
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
    background: #eaf0ef;
}

.grid-content {
    border-radius: 4px;
    height: 100%;
}


</style>