<template>
  <div class="container">
    <waves></waves>
    <el-progress
      type="circle"
      :percentage="percent"
      :width="40"
      :height="40"
    ></el-progress>
    <el-container>
      <el-aside width="150px"
        ><el-dropdown placement="bottom-start" hide-timeout="1000">
          <span class="el-dropdown-link">
            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              @click.native="searchFinance"
              v-model="msg"
              id="news_1"
              >财经</el-dropdown-item
            >
            <el-dropdown-item
              @click.native="searchTechnology"
              v-model="msg"
              id="news_1"
              >科技</el-dropdown-item
            >
            <el-dropdown-item
              @click.native="searchSport"
              v-model="msg"
              id="news_1"
              >体育</el-dropdown-item
            >
            <el-dropdown-item
              @click.native="searchEntertainment"
              v-model="msg"
              id="news_1"
              >娱乐</el-dropdown-item
            >
            <el-dropdown-item
              @click.native="searchFirstNews"
              v-model="msg"
              id="news_1"
              >头条</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown></el-aside
      >
      <el-main>
        <h4 v-html="news">
          {{ news }}
        </h4></el-main
      >
    </el-container>
  </div>
</template>

<script>
//  引入echarts
import axios from "axios";
// import * as echarts from 'echarts'
export default {
  data() {
    return {
      msg: "",
      news: "静候您的搜索.....",
      percent: 0,
    };
  },
  methods: {
    searchFinance: function () {
      var that = this;
      that.percent = 0;
      that.msg = "财经";
      axios({
        url: "https://api.iyk0.com/xinwen/?msg=" + that.msg + "&type=json",
        method: "get",
      }).then(function (res) {
        that.news = res.data.content;
        that.percent = 100;
        that.$message({
          message: "加载完成",
          duration: 500,
        });
      });
    },
    searchTechnology: function () {
      var that = this;
      that.percent = 0;

      that.msg = "科技";
      axios({
        url: "https://api.iyk0.com/xinwen/?msg=" + that.msg + "&type=json",
        method: "get",
      }).then(function (res) {
        that.news = res.data.content;
        that.percent = 100;
        that.$message({
          message: "加载完成",
          duration: 500,
        });
      });
    },
    searchSport: function () {
      var that = this;
      that.percent = 0;

      that.msg = "体育";
      axios({
        url: "https://api.iyk0.com/xinwen/?msg=" + that.msg + "&type=json",
        method: "get",
      }).then(function (res) {
        that.news = res.data.content;
        that.percent = 100;
        that.$message({
          message: "加载完成",
          duration: 500,
        });
      });
    },
    searchEntertainment: function () {
      var that = this;
      that.percent = 0;

      that.msg = "娱乐";
      axios({
        url: "https://api.iyk0.com/xinwen/?msg=" + that.msg + "&type=json",
        method: "get",
      }).then(function (res) {
        that.news = res.data.content;
        that.percent = 100;
        that.$message({
          message: "加载完成",
          duration: 500,
        });
      });
    },
    searchFirstNews: function () {
      var that = this;
      that.percent = 0;

      that.msg = "头条";
      axios({
        url: "https://api.iyk0.com/xinwen/?msg=" + that.msg + "&type=json",
        method: "get",
      }).then(function (res) {
        that.news = res.data.content;
        that.percent = 100;
        that.$message({
          message: "加载完成",
          duration: 500,
        });
      });
    },
  },

  mounted() {
    // axios({
    // 		url:'https://api.iyk0.com/xinwen/?msg=财经&type=json',
    // 		method:'get'
    //     }).then(function(res){
    //         console.log((res.data.content));
    //     })
  },
};
</script>

<style>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 100px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 16px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 100px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 100px;
}
h4 {
  color: gray;
  opacity: 0.5;
}
</style>
