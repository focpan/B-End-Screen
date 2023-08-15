<template>
  <div class="rightBar"></div>
</template>

<script>
export default {
  name: "",
  props: {
    data: Array,
  },
  data() {
    return {
      currentIdxs: Array(this.data.length).fill(0),
      maxListLen: 5,
      maxTextLen: 4,
      timerId: null,
    };
  },
  methods: {
    setSoliderData(type) {
      let arr = [];
      let obj = {};
      for (let i = 0; i < this.data.length; i++) {
        switch (type) {
          case "g":
            obj = {
              top: this.data[i].top,
              left: 8,
              right: 30,
              height: "13.5%",
            };
            break;
          case "x":
            obj = {
              axisLine: { show: false },
              axisTick: { show: false, interval: 0 },
              splitLine: { show: false },
              type: "category",
              boundaryGap: false,
              gridIndex: i,
              axisLabel: {
                show: false,
              },
              data: [1, 2, 3, 4, 5],
            };
            break;
          case "y":
            obj = {
              type: "value",
              axisLine: { show: false },
              gridIndex: i,
              axisTick: { show: false },
              splitLine: { show: false },
              axisLabel: { show: false },
            };
            break;
          case "s":
            obj = {
              type: "bar",
              barWidth: 12,
              data: (() => {
                let arr = [];
                let len = this.data[i].data.length;
                for (
                  let j = this.currentIdxs[i];
                  j < len && j < this.currentIdxs[i] + this.maxListLen;
                  ++j
                ) {
                  arr.push(this.data[i].data[j]);
                }
                return arr;
              })(),
              label: {
                show: true,
                position: "insideBottomLeft",
                offset: [12, 0],
                distance: 4,
                color: "#88B6C7",
                fontSize: 11,
                lineHeight: 13,
                rich: {
                  a: {},
                },
                formatter: (data) => {
                  data.data.name = data.data.name.substring(0, this.maxTextLen);
                  if (data.data.name.length == 2) {
                    return data.data.name.split("").join("\n\n");
                  } else {
                    return data.data.name.split("").join("\n");
                  }
                },
              },
              itemStyle: {
                color: {
                  // 颜色线性渐变
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgba(" + this.data[i].color + ",1)", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(" + this.data[i].color + ",1)", // 100% 处的颜色
                    },
                  ],
                  globalCoord: false, // 缺省为 false
                },
              },
              xAxisIndex: i,
              yAxisIndex: i,
            };
            break;
          default:
            break;
        }
        arr.push(obj);
      }
      return arr;
    },
    // 用户排名
    setChart() {
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: "{b}:{c}",
        },
        title: {
          text: "商户排名",
          left: 0,
          top: 25,
          textStyle: {
            fontSize: 12,
            color: "#FFF",
          },
        },
        grid: this.setSoliderData("g"),
        xAxis: this.setSoliderData("x"),
        yAxis: this.setSoliderData("y"),
        series: this.setSoliderData("s"),
      };
      let myChart = this.$echarts(this.$el);

      myChart.clear();
      myChart.resize();
      myChart.setOption(option);
      let idxs_ = this.currentIdxs;
      for (let i = 0; i < idxs_.length; ++i) {
        let data = this.data[i].data;
        let nextIdx = idxs_[i] + this.maxListLen;
        idxs_[i] = nextIdx > data.length ? 0 : nextIdx % data.length;
      }
    },
  },
  mounted() {
    this.setChart();
    this.timerId = setInterval(() => {
      this.setChart();
    }, 3000);
  },
  destroyed() {
    clearInterval(this.timerId);
  },
};
</script>

<style lang="less" scoped>
.rightBar {
  height: 100%;
  width: 55%;
  float: left;
}
</style>
