<template>
    <div class="hotWords"></div>
</template>

<script>
export default {
    name: 'hotWords',
    data() {
        return {}
    },
    methods: {
        // 积极/消极词汇分析
        setChart() {
            let option = {
                tooltip: {
                    trigger: 'item',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    },
                },
                legend: {
                    data: [
                        {name: '积极词汇排行', icon: 'circle'},
                        {name: '消极词汇排行', icon: 'circle'},

                    ],
                    gridIndex: 3,
                    left: "19%",
                    top: "4%",
                    itemWidth: 7,
                    itemHeight: 7,
                    textStyle: {
                        color: '#00CCFF',
                        fontSize: 10
                    }
                },
                grid: [
                    {
                        left: "10%",
                        top: '12%',
                        bottom: "64%",
                        width: '35%'
                    },
                    {
                        left: "48%",
                        top: '12%',
                        bottom: "64%",
                        width: 1
                    },
                    {
                        right: "15%",
                        top: '12%',
                        bottom: "64%",
                        width: '35%'
                    },
                    {
                        left: "10%",
                        top: '41.5%',
                        bottom: "35%",
                        width: '35%'
                    },
                    {
                        left: "48%",
                        top: '41.5%',
                        bottom: "35%",
                        width: 1
                    },
                    {
                        right: "15%",
                        top: '41.5%',
                        bottom: "35%",
                        width: '35%'
                    },
                    {
                        left: "10%",
                        top: '70%',
                        bottom: "5%",
                        width: '35%'
                    },
                    {
                        left: "48%",
                        top: '70%',
                        bottom: "5%",
                        width: 1
                    },
                    {
                        right: "15%",
                        top: '70%',
                        bottom: "5%",
                        width: '35%'
                    },
                ],
                xAxis: [
                    {
                        type: "value",
                        inverse: true,
                        splitLine: {show: false},
                        axisLine: {show: false},
                        axisLabel: {show: false},
                        axisTick: {show: false},
                    },
                    {
                        type: "value",
                        gridIndex: 1,
                    },
                    {
                        type: "value",
                        gridIndex: 2,
                        splitLine: {show: false},
                        axisLine: {show: false},
                        axisLabel: {show: false},
                        axisTick: {show: false},
                    },
                    {
                        type: "value",
                        gridIndex: 3,
                        inverse: true,
                        splitLine: {show: false},
                        axisLine: {show: false},
                        axisLabel: {show: false},
                        axisTick: {show: false},
                    },
                    {
                        type: "value",
                        gridIndex: 4,
                    },
                    {
                        type: "value",
                        gridIndex: 5,
                        splitLine: {show: false},
                        axisLine: {show: false},
                        axisLabel: {show: false},
                        axisTick: {show: false},
                    },
                    {
                        type: "value",
                        gridIndex: 6,
                        inverse: true,
                        splitLine: {show: false},
                        axisLine: {show: false},
                        axisLabel: {show: false},
                        axisTick: {show: false},
                    },
                    {
                        type: "value",
                        gridIndex: 7,
                    },
                    {
                        type: "value",
                        gridIndex: 8,
                        splitLine: {show: false},
                        axisLine: {show: false},
                        axisLabel: {show: false},
                        axisTick: {show: false},
                    },
                ],
                yAxis: [
                    {
                        data: [1, 2, 3, 4, 5],
                        inverse: true,
                        axisLabel: {show: false},
                        axisTick: {show: false},
                        axisLine: {show: false}
                    },
                    {
                        data: [1, 2],
                        gridIndex: 1,
                        offset: -1,
                        axisLine: {
                            lineStyle: {
                                color: '#153575'
                            }
                        },
                        axisTick: {
                            color: '#153575'
                        },
                        boundaryGap: false,
                        showMinLabel: true,
                        showMaxLabel: true,
                        axisLabel: {show: false}
                    },
                    {
                        data: [1, 2],
                        gridIndex: 1,
                        axisLine: {
                            lineStyle: {
                                color: '#153575'
                            }
                        },
                        axisTick: {
                            color: '#153575'
                        },
                        boundaryGap: false,
                        showMinLabel: true,
                        showMaxLabel: true,
                        axisLabel: {show: false}
                    },
                    {
                        data: [1, 2, 3, 4, 5],
                        gridIndex: 2,
                        inverse: true,
                        axisLabel: {show: false},
                        axisTick: {show: false},
                        axisLine: {show: false}
                    },
                    {
                        data: [1, 2, 3, 4, 5],
                        gridIndex: 3,
                        inverse: true,
                        axisLabel: {show: false},
                        axisTick: {show: false},
                        axisLine: {show: false}
                    },
                    {
                        data: [1, 2],
                        gridIndex: 4,
                        offset: -1,
                        axisLine: {
                            lineStyle: {
                                color: '#153575'
                            }
                        },
                        axisTick: {
                            color: '#153575'
                        },
                        boundaryGap: false,
                        showMinLabel: true,
                        showMaxLabel: true,
                        axisLabel: {show: false}
                    },
                    {
                        data: [1, 2],
                        gridIndex: 4,
                        axisLine: {
                            lineStyle: {
                                color: '#153575'
                            }
                        },
                        axisTick: {
                            color: '#153575'
                        },
                        boundaryGap: false,
                        showMinLabel: true,
                        showMaxLabel: true,
                        axisLabel: {show: false}
                    },
                    {
                        data: [1, 2, 3, 4, 5],
                        gridIndex: 5,
                        inverse: true,
                        axisLabel: {show: false},
                        axisTick: {show: false},
                        axisLine: {show: false}
                    },
                    {
                        data: [1, 2, 3, 4, 5],
                        gridIndex: 6,
                        inverse: true,
                        axisLabel: {show: false},
                        axisTick: {show: false},
                        axisLine: {show: false}
                    },
                    {
                        data: [1, 2],
                        gridIndex: 7,
                        offset: -1,
                        axisLine: {
                            lineStyle: {
                                color: '#153575'
                            }
                        },
                        axisTick: {
                            color: '#153575'
                        },
                        boundaryGap: false,
                        showMinLabel: true,
                        showMaxLabel: true,
                        axisLabel: {show: false}
                    },
                    {
                        data: [1, 2],
                        gridIndex: 7,
                        axisLine: {
                            lineStyle: {
                                color: '#153575'
                            }
                        },
                        axisTick: {
                            color: '#153575'
                        },
                        boundaryGap: false,
                        showMinLabel: true,
                        showMaxLabel: true,
                        axisLabel: {show: false}
                    },
                    {
                        data: [1, 2, 3, 4, 5],
                        gridIndex: 8,
                        inverse: true,
                        axisLabel: {show: false},
                        axisTick: {show: false},
                        axisLine: {show: false}
                    },
                ],
                series: [
                    {
                        name: '积极词汇排行',
                        type: 'bar',
                        barWidth: 6,
                        label: {
                            show: true,
                            position: 'left',
                            formatter: "{b}",
                            color: '#6EDDF2'
                        },
                        itemStyle: {
                            color: { // 颜色线性渐变
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [{
                                    offset: 0, color: 'rgba(4,85,229,1)' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'rgba(4,85,229,0)' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                            barBorderRadius: 5,
                        },
                        data: [
                            {
                                value: 500,
                                name: '贴心'
                            },
                            {
                                value: 424,
                                name: '细致'
                            },
                            {
                                value: 332,
                                name: '主动'
                            },
                            {
                                value: 264,
                                name: '周到'
                            },
                            {
                                value: 144,
                                name: '专业'
                            },
                        ]
                    },
                    {
                        name: '消极词汇排行',
                        type: 'bar',
                        xAxisIndex: 2,
                        yAxisIndex: 3,
                        barWidth: 6,
                        label: {
                            show: true,
                            position: 'right',
                            formatter: "{b}",
                            color: '#6EDDF2'
                        },
                        itemStyle: {
                            color: { // 颜色线性渐变
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [{
                                    offset: 0, color: 'rgba(1,176,223,0)' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'rgba(1,176,223,1)' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                            barBorderRadius: 5,
                        },
                        data: [
                            {
                                value: 500,
                                name: '不耐烦'
                            },
                            {
                                value: 424,
                                name: '敷衍'
                            },
                            {
                                value: 332,
                                name: '慢'
                            },
                            {
                                value: 264,
                                name: '不专业'
                            },
                            {
                                value: 144,
                                name: '冷淡'
                            },
                        ]
                    },
                    {
                        name: '积极词汇排行',
                        type: 'bar',
                        barWidth: 6,
                        xAxisIndex: 3,
                        yAxisIndex: 4,
                        label: {
                            show: true,
                            position: 'left',
                            formatter: "{b}",
                            color: '#6EDDF2'
                        },
                        itemStyle: {
                            color: { // 颜色线性渐变
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [{
                                    offset: 0, color: 'rgba(4,85,229,1)' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'rgba(4,85,229,0)' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                            barBorderRadius: 5,
                        },
                        data: [
                            {
                                value: 500,
                                name: '干净'
                            },
                            {
                                value: 424,
                                name: '整洁'
                            },
                            {
                                value: 332,
                                name: '安静'
                            },
                            {
                                value: 264,
                                name: '舒适'
                            },
                            {
                                value: 144,
                                name: '方便'
                            },
                        ]
                    },
                    {
                        name: '消极词汇排行',
                        type: 'bar',
                        xAxisIndex: 5,
                        yAxisIndex: 7,
                        barWidth: 6,
                        label: {
                            show: true,
                            position: 'right',
                            formatter: "{b}",
                            color: '#6EDDF2'
                        },
                        itemStyle: {
                            color: { // 颜色线性渐变
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [{
                                    offset: 0, color: 'rgba(1,176,223,0)' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'rgba(1,176,223,1)' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                            barBorderRadius: 5,
                        },
                        data: [
                            {
                                value: 500,
                                name: '脏'
                            },
                            {
                                value: 424,
                                name: '破旧'
                            },
                            {
                                value: 332,
                                name: '不卫生'
                            },
                            {
                                value: 264,
                                name: '吵闹'
                            },
                            {
                                value: 144,
                                name: '偏僻'
                            },
                        ]
                    },
                    {
                        name: '积极词汇排行',
                        type: 'bar',
                        barWidth: 6,
                        xAxisIndex: 6,
                        yAxisIndex: 8,
                        label: {
                            show: true,
                            position: 'left',
                            formatter: "{b}",
                            color: '#6EDDF2'
                        },
                        itemStyle: {
                            color: { // 颜色线性渐变
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [{
                                    offset: 0, color: 'rgba(4,85,229,1)' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'rgba(4,85,229,0)' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                            barBorderRadius: 5,
                        },
                        data: [
                            {
                                value: 500,
                                name: '宝藏'
                            },
                            {
                                value: 424,
                                name: '推荐'
                            },
                            {
                                value: 332,
                                name: '满意'
                            },
                            {
                                value: 264,
                                name: '好吃'
                            },
                            {
                                value: 144,
                                name: '香'
                            },
                        ]
                    },
                    {
                        name: '消极词汇排行',
                        type: 'bar',
                        xAxisIndex: 8,
                        yAxisIndex: 11,
                        barWidth: 6,
                        label: {
                            show: true,
                            position: 'right',
                            formatter: "{b}",
                            color: '#6EDDF2'
                        },
                        itemStyle: {
                            color: { // 颜色线性渐变
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [{
                                    offset: 0, color: 'rgba(1,176,223,0)' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'rgba(1,176,223,1)' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                            barBorderRadius: 5,
                        },
                        data: [
                            {
                                value: 500,
                                name: '踩雷'
                            },
                            {
                                value: 424,
                                name: '不值'
                            },
                            {
                                value: 332,
                                name: '难吃'
                            },
                            {
                                value: 264,
                                name: '不喜欢'
                            },
                            {
                                value: 144,
                                name: '差评'
                            },
                        ]
                    }
                ]

            };
            let myChart = this.$echarts(this.$el);
            myChart.clear();
            myChart.resize();
            myChart.setOption(option);
        },
    },
    mounted() {
        this.setChart()
    },
}
</script>

<style lang="less" scoped>
.hotWords {
    height: 100%;
    width: 70%;
    float: right;
}
</style>
