<template>
  <div class="hot-trend"></div>
</template>

<script>
import { hotTrendData } from "../../../config/index";
export default {
  name: "HotTrend",
  props: {
    selectRangeDate: Array,
    limit: Number,
  },
  data() {
    return {};
  },
  methods: {
    setData(type) {
      let arr = [];
      switch (type) {
        case "x":
          for (let i = 0; i < this.selectRangeDate.length; i++) {
            arr.push(
              this.selectRangeDate[i][1] + "." + this.selectRangeDate[i][2]
            );
          }
          break;
        case "s":
          for (let i = 0; i < this.selectRangeDate.length; i++) {
            arr.push((Math.random() * 100).toFixed(0));
          }
          break;

        default:
          break;
      }

      return arr;
    },
    setChart() {
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "line", // 默认为直线，可选为：'line' | 'shadow'
          },
          backgroundColor: "#11367a",
          textStyle: {
            color: "#6dd0e3",
            fontSize: 10,
          },
        },
        grid: {
          top: "12%",
          bottom: "12%",
          left: "5%",
          right: "5%",
        },
        legend: {
          right: "5%",
          top: "10%",
          itemWidth: 7,
          itemHeight: 7,
          textStyle: {
            color: "#5CB1C1",
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          axisLabel: {
            color: "#61B9C8",
            fontSize: 10,
          },
          axisLine: {
            symbol: ["none", "arrow"],
            symbolSize: [6, 6],
            symbolOffset: [0, 5],
            lineStyle: {
              color: "#122C49",
            },
          },
          axisTick: {
            color: "#122C49",
            inside: true,
          },
          z: 2,
          data: this.setData("x"),
        },
        yAxis: {
          type: "value",
          interval: 10,
          min: 0,
          max: 110,
          splitNumber: 7,
          axisLine: {
            symbol: ["none", "arrow"],
            symbolSize: [6, 6],
            lineStyle: {
              color: "#122C49",
            },
          },
          axisLabel: {
            color: "#61B9C8",
            showMaxLabel: false,
            fontSize: 10,
          },
          splitLine: {
            show: false,
          },
          name: "(热度)",
          nameGap: -10,
          nameTextStyle: {
            color: "#61B9C8",
            fontSize: 9,
            align: "right",
            padding: [0, 6, 0, 0],
          },
        },
        series: hotTrendData.slice(0, this.limit),
      };
      let myChart = this.$echarts(this.$el);

      myChart.clear();
      myChart.resize();
      myChart.setOption(option);
    },
  },
  mounted() {
    this.setChart();
  },
};
</script>

<style lang="less" scoped>
.hot-trend {
  width: 100%;
  height: 100%;
}
</style>