<template>
  <div>
    <waves></waves>
  
    <h1 :style="{ 'text-align': 'center' }">天气查询</h1>
    <i
      class="el-icon-cloudy"
      :style="{ 'padding-left': '170px', color: cloudColor }"
    ></i>
    <i
      class="el-icon-heavy-rain"
      :style="{ 'margin-left': '170px', color: heavyRainColor }"
    ></i>
    <i
      class="el-icon-lightning"
      :style="{ 'margin-left': '170px', color: flashColor }"
    ></i>
    <i
      class="el-icon-light-rain"
      :style="{ 'margin-left': '170px', color: littleRainColor }"
    ></i>
    <i
      class="el-icon-sunrise"
      :style="{ 'margin-left': '170px', color: sunColor }"
    ></i>
    <i
      class="el-icon-sunrise-1"
      :style="{ 'margin-left': '170px', color: weightSunColor }"
    ></i>
    <el-progress :percentage="percent"></el-progress>
    <el-input
      prefix-icon="el-icon-search"
      placeholder="请输入要搜索的城市天气"
      v-model="input"
      clearable
      @keydown.native="addByEnterKey"
    >
    </el-input>
    <el-table :data="tableData" stripe style="width: 100%" :border="true">
      <el-table-column :v-model="city" label="城市" :span="4"
        >{{ city }}
      </el-table-column>
      <el-table-column prop="date" label="日期" :span="5" align="center">
      </el-table-column>
      <el-table-column prop="high" label="最高温" :span="5" align="center">
      </el-table-column>
      <el-table-column prop="low" label="最低温" :span="5" align="center">
      </el-table-column>
      <el-table-column prop="type" label="类型" :span="5" align="center">
      </el-table-column>
    </el-table>
    <div>
      <p id="p2_trans">
        在线翻译

        <i class="el-icon-notebook-1"></i>
      </p>
    </div>
    <el-input
      type="textarea"
      autosize
      placeholder="输入您要翻译的内容"
      v-model="textarea1"
      @keydown.native="transLang"
      resize="none"
      clearable
    >
    </el-input>
    <div style="margin: 20px 0"></div>
    <el-input
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 4 }"
      placeholder=""
      v-model="textarea2"
      readonly
    >
    </el-input>

   
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      tableData: [],
      cityWeather: {},
      input: "",
      city: "",
      cloudColor: "white",
      heavyRainColor: "white",
      flashColor: "white",
      littleRainColor: "white",
      sunColor: "white",
      weightSunColor: "white",
      percent: 0,
      textarea1: "",
      textarea2: "",
      startTime: 0,
      endTime: 0,
      dP1: /^[\u4e00-\u9fa5]{1,}\u3002{0,}\uff0c{0,}$/,
    };
  },
  methods: {
    addByEnterKey(e) {
      var that = this;
      //Enter键的代码就是13
      if (e.keyCode === 13) {
        that.weightSunColor = "white";
        that.cloudColor = "white";
        that.heavyRainColor = "white";
        that.littleRainColor = "white";
        that.sunColor = "white";
        that.flashColor = "white";
        that.percent = 0;
        axios({
          url: "https://api.iyk0.com/6rtq/?city=" + that.input,
          method: "get",
        })
          .then(function (res) {
            that.city = res.data.data.city;

            that.tableData = res.data.data.forecast;
            //方便代码编写
            var weatherType = that.tableData[0].type;
            // console.log(res.data.data.forecast[0]);
            if (weatherType === "多云") {
              that.cloudColor = "blue";
              that.$message({
                showClose: true,
                message: "今天多云哦",
              });
            }
            if (weatherType === "大雨") {
              that.heavyRainColor = "red";
              that.$message({
                showClose: true,
                message: "外面可能大雨,出门记得带伞哦",
              });
            }
            if (weatherType == "雷阵雨" || weatherType == "中雨") {
              that.flashColor = "red";
              that.$message({
                showClose: true,
                message: "外面可能较大的雨,谨慎出行哦",
              });
            }
            if (weatherType === "小雨") {
              that.littleRainColor = "orange";
              that.$message({
                showClose: true,
                message: "外面可能小雨,出门记得带伞哦",
              });
            }
            if (weatherType === "晴") {
              that.sunColor = "green";
              that.$message({
                showClose: true,
                message: "晴天,出门走走哦",
              });
            }
            if (weatherType === "阴") {
              that.weightSunColor = "green";
              that.$message({
                showClose: true,
                message: "外面阴天,出门记得带伞哦",
              });
            }
            that.percent = 100;
          })
          .catch(() => {
            that.tableData = [];
            that.startTime = Date.now();
            if (that.startTime - that.endTime < 1000) return;
            // alert('你输入的信息错误');
            that.$message({
              showClose: true,
              message: "您输入的城市信息有误",
              duration: 500,
            });
            that.endTime = Date.now();
          });
      }
    },
    // 翻译功能 重点是正则表达式    还有就是提示消息时间戳限定反复提示
    transLang: function (e) {
      var that = this;
      if (e.keyCode === 13) {
        if (that.dP1.test(that.textarea1)) {
          axios({
            url:
              "https://api.muxiaoguo.cn/api/Tn_tencent?text=" + that.textarea1,
            method: "get",
          }).then(function (res) {
            that.textarea2 = res.data.data.Translation;
          });
        } else {
          that.textarea1 = "";
          that.textarea2 = "";
          that.startTime = Date.now();
          if (that.startTime - that.endTime < 1000) return;
          that.$message({
            showClose: true,
            message: "请正确输入",
            duration: 500,
          });
          that.endTime = Date.now();
        }
      }
      // else {
      //   that.textarea1 = "";
      //   that.startTime = Date.now();
      //   if(that.startTime - that.endTime < 1000)return
      //   that.$message({
      //     showClose: true,
      //     message: "请正确输入",
      //     duration: 500,
      //   });
      //   that.endTime = Date.now()
      // }
    },
  },
};
</script>

<style lang="scss">
#h1_1 {
  left: 200px;
}
.typeColor {
  color: red;
  font-size: 60px;
}
#p2_trans {
  text-align: center;
  margin-top: 50px;
  margin-bottom: 20px;
}
#p2_trans:hover {
  color: blue;
}
</style>