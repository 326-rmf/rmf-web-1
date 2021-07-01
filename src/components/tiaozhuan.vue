<template>
  <div>
    <waves></waves>
    <el-progress
      :text-inside="true"
      :stroke-width="22"
      :percentage="percent"
      status="warning"
    ></el-progress>
    <h4>{{ lastTime }}</h4>
    <el-container>
      <el-main>
        <el-row>
          <el-alert title="国内新增" type="error"> </el-alert>
        </el-row>
        <el-row>
          <el-table :data="add" style="width: 100%">
            <el-table-column prop="confirm" label="confirm"> </el-table-column>
            <el-table-column prop="heal" label="heal"> </el-table-column>
            <el-table-column prop="dead" label="dead"> </el-table-column>
            <el-table-column prop="nowConfirm" label="nowConfirm">
            </el-table-column>
            <el-table-column prop="suspect" label="suspect"> </el-table-column>
            <el-table-column prop="nowSevere" label="nowSevere">
            </el-table-column>
            <el-table-column prop="importedCase" label="importedCase">
            </el-table-column>
            <el-table-column prop="noInfect" label="noInfect">
            </el-table-column>
            <el-table-column prop="localConfirm" label="localConfirm">
            </el-table-column>
            <el-table-column prop="noInfectH5" label="noInfectH5">
            </el-table-column>
            <el-table-column prop="localConfirmH5" label="localConfirmH5">
            </el-table-column>
          </el-table>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div style="width: 100%; height: 400px" id="zhu"></div>
          </el-col>
        </el-row>
        <el-row>
          <el-alert title="国内疫情统计" type="error"> </el-alert>
        </el-row>
        <el-row>
          <el-table :data="add1" style="width: 100%">
            <el-table-column prop="confirm" label="confirm"> </el-table-column>
            <el-table-column prop="dead" label="dead"> </el-table-column>
            <el-table-column prop="heal" label="heal"> </el-table-column>
            <el-table-column prop="importedCase" label="importedCase">
            </el-table-column>
            <el-table-column prop="localConfirm" label="localConfirm">
            </el-table-column>
            <el-table-column prop="localConfirmH5" label="localConfirmH5">
            </el-table-column>
            <el-table-column prop="noInfect" label="noInfect">
            </el-table-column>
            <el-table-column prop="noInfectH5" label="noInfectH5">
            </el-table-column>
            <el-table-column prop="nowConfirm" label="nowConfirm">
            </el-table-column>
            <el-table-column prop="nowSevere" label="nowSevere">
            </el-table-column>
            <el-table-column prop="showLocalConfirm" label="showLocalConfirm">
            </el-table-column>
            <el-table-column
              prop="showlocalinfeciton"
              label="showlocalinfeciton"
            >
            </el-table-column>
            <el-table-column prop="suspect" label="suspect"> </el-table-column>
          </el-table>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div style="width: 100%; height: 400px" id="zhexian"></div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import $ from "jquery";
// import axios from "axios";
import * as echarts from "echarts";

export default {
  name: "Home",
  data() {
    return {
      total: {},
      add: [],
      add1: [],
      addarr: [],
      addnum: [],
      totalarr: [],
      totalnum: [],
      percent: 0,
      lastTime: "",
    };
  },
  methods: {
    getData: function () {
      var _this = this;
      $.ajax({
        url: "https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5",
        dataType: "jsonp", // 请求方式为jsonp
        crossDomain: true,
      }).then(function (res) {
        // console.log(JSON.parse(res.data).chinaAdd);
        _this.total = JSON.parse(res.data).chinaTotal;
        _this.add = [JSON.parse(res.data).chinaAdd];
        var addObj = JSON.parse(res.data).chinaAdd;
        var addarr = [];
        var addnum = [];
        //  对象的遍历
        //  在遍历之前，需要检查右边是不是对象
        //  这种写法对后台的数据要求非常严格
        for (var item in addObj) {
          addarr.push(item);
          addnum.push(addObj[item]);
        }
        _this.addarr = addarr;
        _this.addnum = addnum;
        _this.drawZhu();
        _this.percent = 100;
      });
    },
    getOtherData: function () {
      var _this = this;
      $.ajax({
        url: "https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5",
        dataType: "jsonp",
        type: "get",
      }).then(function (res) {
        // console.log(JSON.parse(JSON.parse(res.data.body).data));
        _this.total = JSON.parse(res.data).chinaTotal;
        _this.add1 = [JSON.parse(res.data).chinaTotal];
        _this.lastTime =
          "最近一次的更新时间是  " + JSON.parse(res.data).lastUpdateTime;
        var totalObj = JSON.parse(res.data).chinaTotal;
        var totalarr = [];
        var totalnum = [];
        //  对象的遍历
        //  在遍历之前，需要检查右边是不是对象
        //  这种写法对后台的数据要求非常严格
        for (var item in totalObj) {
          totalarr.push(item);
          totalnum.push(totalObj[item]);
        }
        _this.totalarr = totalarr;
        _this.totalnum = totalnum;
        _this.drawZhe();
      });
    },
    drawZhu: function () {
      var _this = this;
      var myChart = echarts.init(document.getElementById("zhu"));
      myChart.setOption({
        xAxis: {
          //  图的类别
          type: "category",
          data: _this.addarr,
          axisLabel: {
            interval: 0,
          },
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            // series[0].bar.label:_this.addnum[0],
            data: _this.addnum,
            type: "bar",
            // barGap:'80%',
            barCategoryGap: "30%",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)",
            },
          },
        ],
         title: {                               
                text: '国内新增柱状图',               
                textStyle:{                 //---主标题内容样式   
                    color:'#000'
                },
 
                
                padding:[0,0,100,100]               //---标题位置,因为图形是是放在一个dom中,因此用padding属性来定位
 
            },
             grid:{
                show:false,                 //---是否显示直角坐标系网格
                top:80,                     //---相对位置，top\bottom\left\right 
                containLabel:false,         //---grid 区域是否包含坐标轴的刻度标签
                tooltip:{                   //---鼠标焦点放在图形上，产生的提示框
                    show:true, 
                    trigger:'item',         //---触发类型
                    textStyle:{
                        color:'#666',
                    },
                }
            },
      });
    },
    drawZhe: function () {
      var _this = this;
      var myChart = echarts.init(document.getElementById("zhexian"));
      myChart.setOption({
        backgroundColor: "rgba(0,0,0,1)",
        title: { text: "国内疫情折线图", x: "center" },
        tooltip: {
          trigger: "axis",
          //当鼠标移动到数值时候，在X轴Y轴显示数值
          axisPointer: {
            type: "cross",
          },
        },
        
        xAxis: {
          //  图的类别
          type: "category",
          data: _this.totalarr,
          axisLabel: {
            interval: 0,
          },
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: _this.totalnum,
            type: "line",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)",
            },
          },
        ],
      });
      this.$message({
        message: "加载完成",
        duration: 500,
      });
    },
  },

  // beforeCreate   页面的标签创建之前
  // created        页面的标签创建之后
  // beforeMount    页面的标签里面的内容渲染完毕之前
  // mounted
  mounted() {
    this.getData();
    this.getOtherData();
  },
};
</script>

<style scoped>
</style>
