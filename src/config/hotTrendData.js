let dateDuartion = 30;
let maxVal = 100;
function genRandom() {
  let arr = [];
  for (let i = 0; i < dateDuartion; ++i)
    arr.push((Math.random() * maxVal).toFixed(0));
  return arr;
}
function getSerie(config) {
  return {
    name: config?.name,
    type: "line",
    symbol: "none",
    smooth: true,
    data: config?.data,
    lineStyle: {
      width: 1,
      color: {
        type: "linear",
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: config?.colorStops,
        global: false, // 缺省为 false
      }, //背景渐变色
    },
    itemStyle: config?.itemStyle,
  };
}

let configs = [
  {
    name: "麗枫酒店",
    data: genRandom(),
    colorStops: [
      {
        offset: 0,
        color: "#B21356", // 0% 处的颜色
      },
      {
        offset: 0.5,
        color: "#B21356", // 40% 处的颜色
      },
      {
        offset: 1,
        color: "#F59111", // 100% 处的颜色
      },
    ],
    itemStyle: {
      color: "rgb(212,37,43)",
    },
  },
  {
    name: "壹米酒店",
    data: genRandom(),
    colorStops: [
      {
        offset: 0,
        color: "rgb(30, 146, 224)", // 0% 处的颜色
      },
      {
        offset: 0.5,
        color: "rgb(68, 158, 218)", // 40% 处的颜色
      },
      {
        offset: 1,
        color: "rgb(137, 201, 243)", // 100% 处的颜色
      },
    ],
    itemStyle: {
      color: "rgb(87, 172, 230)",
    },
  },
];

let series = [];
for (let config of configs) {
  series.push(getSerie(config));
}

export default series;
