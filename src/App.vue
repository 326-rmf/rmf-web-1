<template>
  <div id="app">
    <waves></waves>
    <div id="headerStyle">
      <p>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/tiaozhuan_0' }">
            <i class="el-icon-s-home"></i>
            首页</el-breadcrumb-item
          >
          <el-breadcrumb-item :to="{ path: '/tiaozhuan' }">
            <i class="el-icon-warning"></i>
            国内疫情</el-breadcrumb-item
          >
          <el-breadcrumb-item :to="{ path: '/tiaozhuan_2' }">
            <i class="el-icon-warning-outline"></i>
            地区信息</el-breadcrumb-item
          >
          <el-breadcrumb-item :to="{ path: '/tiaozhuan_3' }">
            <i class="el-icon-view"></i>
            新闻资讯</el-breadcrumb-item
          >
          <el-breadcrumb-item :to="{ path: '/tiaozhuan_4' }">
            <i class="el-icon-s-marketing"></i>
            图片搜索</el-breadcrumb-item
          >
          <el-breadcrumb-item :to="{ path: '/tiaozhuan_5' }">
            <i class="el-icon-s-opportunity"></i>
            小功能</el-breadcrumb-item
          >
          <el-breadcrumb-item> </el-breadcrumb-item>
        </el-breadcrumb>
      </p>
    </div>
    <div id="isScreenFull">
      <i class="el-icon-search" @click="isInputShow"></i>

      <el-tooltip
        content="全屏缩放"
        effect="dark"
        placement="bottom"
        fullscreen
      >
        <i id="screenfull" class="el-icon-full-screen" @click="isScreenFull" />
      </el-tooltip>
      <i class="el-icon-setting" @click="drawer = true"></i>
      <input
        :type="isHidden"
        @keydown="inputTarget"
        v-model="inputSearch"
        placeholder="搜索页内内容"
      />
    </div>

    <el-drawer title="设置" :visible.sync="drawer" :direction="direction">
      <el-select v-model="currentTheme" @change="changeTheme">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-drawer>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in images" :key="item">
        <img :src="item" alt="" style="width: 100%; height: auto"/>
      </el-carousel-item>
    </el-carousel>
    <div id="routeDivStyle">
      <router-view></router-view>
    </div>
  </div>
</template>
<script src="//unpkg.com/vue/dist/vue.js"></script>
<script src="//unpkg.com/element-ui@2.15.1/lib/index.js"></script>
<script src="assets/changecolor.js"></script>
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>
<script>
import screenfull from "screenfull";
export default {
  data() {
    return {
      isFullscreen: false,
      isHidden: "hidden",
      inputSearch: "",
      drawer: false,
      direction: "rtl",
      options: [
        { value: "redTheme", label: "红色主题" },
        { value: "greenTheme", label: "绿色主题" },
        { value: "blueTheme", label: "蓝色主题" },
        { value: "yellowTheme", label: "黄色主题" },
        { value: "purpleTheme", label: "紫色主题" },
      ],
      currentTheme: "greenTheme",
      images: [
        require("./assets/logo.png"),
        require("./assets/bootstrap.jpg"),
        require("./assets/node.jpg"),
        require("./assets/element_1.jpg")
      ],
    };
  },

  methods: {
    // 全屏
    isScreenFull() {
      // 需要注意的是 如果判断!screenfull.enabled 显示的是不支持全屏的话 是因为谷歌的版本问题  判断改为 !screenfull.isEnabled  就可以了

      if (!screenfull.isEnabled) {
        // 如果不支持进入全屏，发出不支持提示
        this.$message({
          message: "您的浏览器版本过低不支持全屏显示！",
          type: "warning",
        });
        return false;
      }
      screenfull.toggle();
    },
    isInputShow() {
      if (this.isHidden == "hidden") {
        this.isHidden = "show";
      } else {
        this.isHidden = "hidden";
      }
    },
    inputTarget() {
      if (
        this.inputSearch == "天气" ||
        this.inputSearch == "天" ||
        this.inputSearch == "翻译"
      )
        window.location.href = "/tiaozhuan_5";
      if (this.inputSearch == "首页" || this.inputSearch == "首")
        window.location.href = "/";
      if (this.inputSearch == "国内疫情" || this.inputSearch == "疫情")
        window.location.href = "/tiaozhuan";
      if (this.inputSearch == "地区信息" || this.inputSearch == "地区")
        window.location.href = "/tiaozhuan_2";
      if (this.inputSearch == "新闻" || this.inputSearch == "新闻资讯")
        window.location.href = "/tiaozhuan_3";
      if (this.inputSearch == "图片" || this.inputSearch == "图片搜索")
        window.location.href = "/tiaozhuan_4";
      if (this.inputSearch == "小功能" || this.inputSearch == "功能")
        window.location.href = "/tiaozhuan_5";
    },
    changeTheme() {
      document.getElementsByTagName("body")[0].className = this.currentTheme;
    },
  },
};
</script>



<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
body {
  width: 100%;
  height: 2000px;
  background-color: white;
}
.block {
  // position: relative;
  width: 100%;
  height: 400px;
}
// 导航栏的样式
#headerStyle {
  // float: left;
  display: inline-block;
  width: 80%;
  height: 30px;
  // background-color: pink;
  margin-top: 0px;

  p {
    padding-top: 8px;
  }
}
#routeDivStyle {
  margin-top: 20px;
}
#isScreenFull {
  width: 20%;
  height: 30px;
  float: right;
  // display: inline-block;
  // background-color: pink;
  // padding-right:0px;
  // margin-top: 0;
  i {
    padding-top: 7px;
  }
  i:hover {
    color: blue;
  }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>