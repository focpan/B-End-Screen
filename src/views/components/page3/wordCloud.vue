<template>
    <div id="container" ></div>
</template>

<script>
import Highcharts from 'highcharts';
import wordcloud from "highcharts/modules/wordcloud";
wordcloud(Highcharts);
export default {
    name: "wordCloud",
    data(){
        return{
            wordCloudData : [
                {
                    id: "1",
                    content: "酒店",
                    weight:15
                },
                {
                    id: "2",
                    content: "房间",
                    weight:12
                },
                {
                    id: "3",
                    content: "卫生",
                    weight:8
                },
                {
                    id: "4",
                    content: "早餐",
                    weight:4
                },
                {
                    id: "5",
                    content: "出行",
                    weight:13
                },
                {
                    id: "6",
                    content: "天河",
                    weight:8
                },
                {
                    id: "7",
                    content: "交通",
                    weight:9
                },
                {
                    id: "8",
                    content: "环境不错",
                    weight:5
                },
                {
                    id: "9",
                    content: "地铁",
                    weight:9
                },
                {
                    id: "10",
                    content: "服务",
                    weight:7
                }
            ],
        }
    },
    mounted(){
        this.$nextTick(() => {
            this.dealData()
        }, 1000);
    },
    methods: {
        dealData(){
            let data = this.wordCloudData.reduce(function (arr, word){
                let obj = {
                    name: word.content,
                    itemData: word,
                    weight: Math.floor(word.weight)//控制加粗,随机数取1~3
                };
                arr.push(obj);
                return arr;
            }, []);
            this.drawPic(data)
        },
        drawPic(data){
            Highcharts.chart('container', {
                //highcharts logo
                credits: { enabled: false },
                //导出
                exporting: { enabled: false },
                //提示关闭
                tooltip: { enabled: false },
                //颜色配置
                colors:[
                    '#ffffff','#00c0d7','#2594ce','#de4c85',
                    '#ff7f46','#ffb310','#e25c52'
                ],
                //图形配置
                chart: {
                    spacingBottom: 15,
                    spacingTop: 12,
                    // spacingLeft: 5,
                    // spacingRight: 5,
                    backgroundColor: "rgba(15,16,99,0)",
                },

                series: [{
                    type: "wordcloud",// 类型
                    data: data,
                    // rotation: 90,//字体不旋转
                    maxFontSize: 15,//最大字体
                    minFontSize: 5,//最小字体
                    style: {
                        fontFamily: "微软雅黑",
                        fontWeight: '500'
                    }
                }
                ],
                //点击事件方法
                plotOptions: {
                    series: {
                        cursor: 'pointer',
                        events: {
                            click: function (e){
                                // 单条数据
                                console.log(e.point.options.itemData)
                            }
                        }
                    }
                },

                //标题配置
                title: {
                    text: '[ 用户词云 ]',
                    // x: 5,
                    // y: 15,
                    align: 'center',
                    style: {
                        color: '#6EDDF1',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        lineHeight: '1.2',
                    }
                }
            });
        }
    }
}
</script>
<style>
	.container {
    width: 100%;
    height: 100%;
    }
    
</style>