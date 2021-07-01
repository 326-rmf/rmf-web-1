<template>
  <div>
	<waves></waves>
    <el-progress :percentage="percent" color="green"></el-progress>
    <el-container>
      <el-aside width="200px"
        ><el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in pictures"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            @click.native="searchPicture"
          >
            <span style="float: left">{{ item.label }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{
              item.value
            }}</span>
          </el-option>
        </el-select></el-aside
      >
      <el-main><img :src="searchPath" alt="静候您的搜索" id="img_1" /></el-main>
    </el-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      pictures: [
        {
          value: "1",
          label: "美女",
        },
        {
          value: "2",
          label: "动漫",
        },
        {
          value: "3",
          label: "风景",
        },
        {
          value: "4",
          label: "游戏",
        },
        {
          value: "5",
          label: "文字",
        },
        {
          value: "6",
          label: "视觉",
        },
        {
          value: "7",
          label: "情感",
        },
        {
          value: "8",
          label: "设计",
        },
        {
          value: "9",
          label: "明星",
        },
        {
          value: "10",
          label: "物语",
        },
        {
          value: "11",
          label: "男人",
        },
        {
          value: "12",
          label: "机械",
        },
        {
          value: "13",
          label: "城市",
        },
        {
          value: "14",
          label: "动物",
        },
      ],
      value: "",
      searchPath: "../../src/assets/zsm5.jpg",
      percent: 0,
    };
  },
  methods: {
    searchPicture: function () {
      var that = this;
      that.percent = 0;
      axios({
        url: "https://api.iyk0.com/sjbz/?type=" + that.value,
        method: "get",
      }).then(function (res) {
        that.searchPath = res.data.img;
        that.percent = 100;
        that.$message({
          message: "加载完成",
          duration: 500,
        });
      });
    },
  },
};
</script>

<style scoped>
#img_1 {
  object-fit: fill;
  object-fit: contain;
  object-fit: scale-down;
  width: 500px;
  height: 300px;
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
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
