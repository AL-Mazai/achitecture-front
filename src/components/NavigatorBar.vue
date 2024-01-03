<template>
    <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#409EFF"
        text-color="#fff"
    >
        <!--      active-text-color="#ffd04b"-->

        <el-menu-item index="2"><p class="sysname">elm外卖平台</p></el-menu-item>
        <el-menu-item index="3" style="float: right">
            <el-dropdown>
      <span class="el-dropdown-link">
        <i class="el-icon-s-custom" style="color: white"></i><span style="color: white">{{ nickname }}</span><i
          class="el-icon-arrow-down el-icon--right"></i>
      </span>

                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>修改信息</el-dropdown-item>
                    <router-link to="/">
                        <el-dropdown-item>退出登录</el-dropdown-item>
                    </router-link>

                </el-dropdown-menu>
            </el-dropdown>
        </el-menu-item>

    </el-menu>

</template>

<script>
export default {
    name: "NavigatorBar",

    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1',
            nickname: localStorage.getItem('username'),
        };
    },
    // beforeCreate() {
    //   localStorage.setItem('userid','1')
    //   localStorage.setItem('nickname','zzw')
    // },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style scoped>
.el-menu {
    padding: 0;
    margin: 0;
}

.el-dropdown-link {
    cursor: pointer;
    text-decoration: none;
}

.el-icon-arrow-down {
    font-size: 12px;
    color: white;
}

.sysname {
    font-weight: bold;
    font-family: 宋体, serif;
    align-content: center;
    margin: 0;
    padding: 0;
}
</style>