import Vue from 'vue'
import VueRouter from 'vue-router'
import CustomerShopListView from "@/views/CustomerShopListView";
import ShopList from "@/components/customer/ShopList";
import BusinessShopListView from "@/views/BusinessShopListView";
import CustomerShopInfoView from "@/views/CustomerShopInfoView";
import AllOrderList from "@/components/customer/AllOrderList";
import AllOrderList1 from "@/components/business/AllOrderList";

import CustomerOrderInfoView from "@/views/CustomerOrderInfoView";
import UnpayOrderList from "@/components/customer/UnpayOrderList";

import RefundOrder from "@/components/customer/RefundOrder";
import RefundOrder1 from "@/components/business/RefundOrder";
import orderDetail from "@/components/customer/OrderDetail";
import orderDetail1 from "@/components/business/OrderDetail"
import UnconfirmOrderList from "@/components/business/UnconfirmOrderList";
import BusinessShopInfoView from "@/views/BusinessShopInfoView";
import BusinessShopOrderView from "@/views/BusinessShopOrderView";
import LoginView from "@/views/LoginView";
import ConfirmOrderList from "@/components/business/ConfirmOrderList.vue";
import PayOrder from "@/components/customer/PayOrder.vue";

Vue.use(VueRouter)

const routes = [
    //  顾客
    {
        path: '/shopsOfCustomer',
        name: 'index',
        component: CustomerShopListView,
        children: [
            {
                path: '/shopsOfCustomer',
                component: ShopList,
                meta: {title: '商店列表'}
            },
            {
                path: '/allOrdersOfCustomer',
                component: AllOrderList,
                meta: {title: '所有订单'}
            },
            {
                path: '/unPay',
                component: UnpayOrderList,
                meta: {title: '未支付订单'}
            },
            {
                path: '/payOrder',
                component: PayOrder,
                meta: {title: '已支付订单'}
            },
            {
                path: '/refundOfCustomer',
                component: RefundOrder,
                meta: {title: '退款订单'}
            },
            {
                path: '/orderdetail',
                name: 'orderdetail',
                component: orderDetail
            },
        ],
    },

    {
        path: '/shopinfo',
        name: "shopinfo",
        component: CustomerShopInfoView
    },
    {
        path: '/orderinfo',
        name: "orderinfo",
        component: CustomerOrderInfoView
    },

    // 商家
    {
        path: '/shopsOfBusiness',
        name: 'shops1',
        component: BusinessShopListView,
    },
    {
        path: '/allOrdersOfBusiness',
        name: 'allOrdersOfBusiness',
        component: BusinessShopOrderView,
        redirect: '/allOrdersOfBusiness',
        children: [
            {
                path: '/allOrdersOfBusiness',
                component: AllOrderList1,
                meta: {title: '所有订单'}
            },
            {
                path: '/unconfirm',
                component: UnconfirmOrderList,
                meta: {title: '未确认订单'}
            },
            {
                path: '/confirm',
                component: ConfirmOrderList,
                meta: {title: '已确认订单'}
            },
            {
                path: '/refundOfBusiness',
                component: RefundOrder1,
                meta: {title: '退款订单'}
            },
            {
                path: '/orderdetail1',
                name: 'orderdetail1',
                component: orderDetail1
            },
        ]
    },
    {
        path: '/shopinfo1',
        name: 'shopinfo1',
        component: BusinessShopInfoView
    },
    {
        path: '/',
        name: 'login',
        component: LoginView
    }

]

const router = new VueRouter({
    routes
})

export default router
