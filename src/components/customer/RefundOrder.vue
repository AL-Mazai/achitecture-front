<template>
    <div>
        <el-table
            :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
            style="width: 90%;margin: 40px 0 0 40px"
            size="medium"
        >
            <el-table-column
                type="selection"
                width="55">
            </el-table-column>
            <el-table-column
                label="交易日期"
                prop="createdDate">
            </el-table-column>
            <el-table-column
                label="订单ID"
                prop="id">
            </el-table-column>
            <el-table-column
                label="交易金额"
                prop="totalPrice">
            </el-table-column>
            <el-table-column
                label="订单状态"
                prop="state">
            </el-table-column>
            <el-table-column
                align="right"
            >
                <template slot-scope="scope">
                    <el-button
                        type="primary" plain
                        size="medium"
                        @click="handleEdit(scope.$index, scope.row)">查看详情
                    </el-button>
                    <el-button
                        type="danger" plain
                        size="medium"
                        @click="handleDelete(scope.$index, scope.row)">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
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
    </div>

</template>

<script>
import axios from "axios";

export default {
    name: "RefundOrder",
    data() {
        return {
            tableData: [],
            search: '',
            orderid: '',
            dialogVisible1: false,
        }
    },
    methods: {
        handleEdit(index, row) {
            console.log(index, row);
            this.$router.push({
                name: 'orderdetail',
                params: {
                    detail: row
                }
            })
        },
        handleDelete(index, row) {
            console.log(index, row);
            this.dialogVisible1 = true;
            this.orderid = row.id
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
                    that.$router.push('/refundOfCustomer')
                })
        }
    },
    mounted() {
        const that = this
        axios.get('/customer/getRefuseOrder?customerId=' + localStorage.getItem("customerId"))
            .then(function (res) {
                console.log(res.data.data)
                // this.tableData = res.data.data
                for (let i = 0; i < res.data.data.length; i++) {
                    console.log(i)
                    that.tableData.push(res.data.data[i])
                    that.tableData[i].state = '已退款'
                }
            })
    },

}
</script>

<style scoped>
.demo-table-expand {
    font-size: 0;
}

.demo-table-expand label {
    width: 90px;
    color: #99a9bf;
}

.demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
}
</style>