<template>
  <div>
    <waves></waves>
    <el-progress :percentage="percent" :color="customColors"></el-progress>
    <el-container>
      <el-header>
        <el-row>
          <el-col class="elcol" :span="6">
            <el-select
              @change="changePro()"
              v-model="value"
              placeholder="请选择"
            >
              <el-option
                v-for="(item, index) in pro"
                :key="item.name"
                :value="index"
                :label="item.name"
              >
              </el-option>
            </el-select>
          </el-col>
          <el-col class="elcol" :span="6">
            <el-select
              @change="changeCity()"
              v-model="cityVal"
              placeholder="请选择"
            >
              <el-option
                v-for="(item, index) in this.city.children"
                :key="item.name"
                :value="index"
                :label="item.name"
              >
              </el-option>
            </el-select>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-row>
          <el-col :span="24">
            <div id="zhu" style="width: 100%; height: 400px"></div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div id="bing" style="width: 100%; height: 400px"></div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// import axios from "axios";
import $ from "jquery";
import * as echarts from "echarts";

export default {
  data() {
    return {
      tableData: [],
      value: "湖北",
      pro: [],
      cityVal: "武汉",
      city: {},
      cityarr: [],
      citynum: [],
      cityObj: [],
      percent: 0,
      customColors: "gold",
    };
  },
  methods: {
    changePro: function () {
      this.city = this.pro[this.value];
    },
    changeCity: function () {
      //   console.log(this.city.children[this.cityVal]);
      var cityarr = [];
      var citynum = [];
      var cityobj = [];
      for (var item in this.city.children[this.cityVal].total) {
        cityarr.push(item);
        citynum.push(this.city.children[this.cityVal].total[item]);
        cityobj.push({
          name: item,
          value: this.city.children[this.cityVal].total[item] + 5,
        });
      }
      this.cityarr = cityarr;
      this.citynum = citynum;
      this.cityObj = cityobj;
      //   console.log(cityobj);
      this.drawZhu();
      this.drawBing();
    },
    drawZhu: function () {
      var _this = this;
      var myChart = echarts.init(document.getElementById("zhu"));
      myChart.setOption({
        xAxis: {
          //  图的类别
          type: "category",
          data: _this.cityarr,
          axisLabel: {
            interval: 0,
          },
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: _this.citynum,
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)",
            },
          },
        ],
      });
    },
    drawBing: function () {
      var _this = this;
      var myChart = echarts.init(document.getElementById("bing"));
      myChart.setOption({
        
        title: {
          text: "当前城市疫情",
          subtext: "纯属虚构",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "详情",
            type: "pie",
            radius: "50%",
            data: _this.cityObj,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      });
    },
  },

  mounted() {
    var _this = this;

    $.ajax({
      url: "https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5",
      dataType: "jsonp",
    }).then(function (res) {
      _this.pro = JSON.parse(res.data).areaTree[0].children;
      _this.percent = 100;
      _this.$message({
        message: "加载完成",
        duration: 500,
      });
    });
  },
};
</script>
<style>
/* 输入框的样式 */
.elcol {
  margin-left: 225px;
}
</style>