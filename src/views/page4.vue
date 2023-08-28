<template>
  <Row class="page3">
    <Col style="width: 26%">
      <div class="left">
        <span class="title" style="z-index: 1999"
          ><span
            class="title-4"
            @click="showRateDetail = !showRateDetail"
            style="cursor: pointer"
            >商户分级监控</span
          ></span
        >
        <span class="angle1"></span>
        <span class="angle2"></span>
        <span class="angle3"></span>
        <span class="angle4"></span>
        <Row style="width: 100%; height: 50%">
          <template style="height: 80%">
            <storeRate v-if="!showRateDetail" ref="chart6"></storeRate>
            <store-rate-detail
              v-else
              :data1="data1"
              :data2="data2"
            ></store-rate-detail>
          </template>
        </Row>
        <div class="left1" style="height: 24%">
          <!-- <red-pocket ref="redPocket"></red-pocket> -->
          <words-cloud></words-cloud>
        </div>
      </div>
    </Col>
    <Col style="width: 48%; padding: 0 1%">
      <div class="center-top">
        <span class="title" style="z-index: 1999"
          ><span class="title-4">用户体验</span></span
        >
        <span class="angle1"></span>
        <span class="angle2"></span>
        <span class="angle3"></span>
        <span class="angle4"></span>
        <public-event-list
          :hotItems="hotItems"
          :items="items"
          :limit="items.length / 2"
        ></public-event-list>
      </div>
      <div class="center-bottom">
        <span class="title"><span class="title-text">热度变化趋势</span></span>
        <span class="angle1"></span>
        <span class="angle2"></span>
        <span class="angle3"></span>
        <span class="angle4"></span>
        <hot-trend :selectRangeDate="selectRangeDate" limit="1"></hot-trend>
      </div>
    </Col>
    <Col style="width: 26%">
      <div class="right-1">
        <div class="right1-1">
          <span class="title"
            ><span class="title-text">用户分布监控</span></span
          >
          <!-- <span class="angle1"></span>
          <span class="angle2"></span>
          <span class="angle3"></span>
          <span class="angle4"></span>
          <webcasts-risk ref="webcastsRisk"></webcasts-risk> -->
          <div class="ring-container">
            <div class="list">
              <ring ref="chart9" :data="ringData1"></ring>
            </div>

            <div class="list">
              <ring ref="chart10" :data="ringData2"></ring>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="right-1">
                <div class="right1-1">
                    <span class='title'><span class="title-text">用户偏好分析</span></span>
                    <span class="angle1"></span>
                    <span class="angle2"></span>
                    <span class="angle3"></span>
                    <span class="angle4"></span>
                    <device-safe-risk ref='deviceSafeRisk'></device-safe-risk>
                </div>
            </div> -->
      <div class="right-2">
        <div class="right1-1">
          <span class="title"
            ><span class="title-text">积极/消极词汇分析</span></span
          >
          <span class="angle1"></span>
          <span class="angle2"></span>
          <span class="angle3"></span>
          <span class="angle4"></span>
          <div class="circular">
            <div class="canvas">
              <div class="subtitle">话题分布</div>
              <div class="canvasList">
                <double-ring
                  id="canvas_1"
                  title="服务"
                  color="#00CCFF"
                  ref="ring1"
                ></double-ring>
                <double-ring
                  id="canvas_2"
                  title="环境"
                  color="#EDCE43"
                  ref="ring2"
                ></double-ring>
                <double-ring
                  id="canvas_3"
                  title="口味"
                  color="#F83552"
                  ref="ring3"
                ></double-ring>
              </div>
            </div>
            <hot-words ref="hotWords"></hot-words>
          </div>
        </div>
      </div>
    </Col>
  </Row>
</template>

<script>
// const chinaMap  = () => import('./components/page3/chinaMap');
// const channelBar = () => import("./components/page3/channelBar");
// const distributionSolider = () =>
//   import("./components/page3/distributionSolider");
// const pie = () => import("./components/pie");
// const redPocket = ()=>import('./components/page3/redPocket');
// const radar = ()=> import('./components/radar');
// const doubleBar = ()=> import('./components/page3/doubleBar');
// const webcastsRisk = () => import("./components/page3/webcastsRisk");
// const deviceSafeRisk = ()=> import('./components/page3/deviceSafeRisk');
const doubleRing = () => import("./components/page3/doubleRing");
const hotWords = () => import("./components/page3/hotWords");
// const tianheMap = () => import("./components/page3/tianheMap");
const wordsCloud = () => import("./components/page3/wordCloud.vue");
const hotTrend = () => import("./components/page3/hotTrend");
const storeRate = () => import("./components/page3/storeRate.vue");
const storeRateDetail = () => import("./components/page3/storeRateDetail.vue");
const publicEventList = () => import("./components/page3/publicEventList.vue");
const ring = () => import("./components/page4/ring");

export default {
  name: "page3",
  props: ["selectRangeDate"],
  components: {
    // chinaMap,
    wordsCloud,
    // tianheMap,
    // channelBar,
    // distributionSolider,
    // pie,
    // redPocket,
    // singleAreaChart,
    // radar,
    // doubleBar,
    // webcastsRisk,
    // deviceSafeRisk,
    doubleRing,
    hotWords,
    hotTrend,
    storeRate,
    storeRateDetail,
    publicEventList,
    ring, // 圆环
  },
  data() {
    return {
      showRateDetail: false,
      showPublicEvent: false,
      hotItems: [
        {
          text: "环境很差，打扫非常不干净，除了第一天前台的小姐服务态度不错外，真的很恶心，墙壁发霉，所谓酒店有霉味，床头柜和地板都是脏的，床底烟头、碎瓷片什么东西都有，里面的花洒是烂的，窗是坏的，晚上有蚊子，真的是图片和实景的巨大区别",
          origin: "携程",
          date: new Date(),
        },
        {
          text: "住宿条件极差，无窗就算了，主要里面臭味太大了，我这么讲究的人当天都想不住走人的，因为附近都满了，也就只能这样住一晚了。潮湿，霉菌，异味浓重。我这出差住了6年的酒店遭遇到最差的一次了，赶上展会疯狂涨价，但这家涨到140多的价格就算了，这种环境是怎么定的价。住了一晚感觉都得得病。。第二天早上出来全身痒，起红色大疹子。奉劝各位想省钱的注意点，参考一下。或者定价格高一点的可能会好点有可能，我只知道我住的房间是极差的。入住当天不敢冲澡、不敢脱衣服睡、不敢上厕所、不敢刷牙(我是用矿泉水的水刷的) 卫生：特差 霉菌 潮湿 异味 环境：恶劣 设施：简陋 服务：一般",
          origin: "携程",
          date: new Date(),
        },
        {
          text: "酒店环境很好 前台24小时都有人 设施齐全 床品也很舒服 每次出差基本都住在这里 非常好",
          origin: "携程",
          date: new Date(),
        },
      ],
      items: [
        {
          text: "酒店环境不错 下次还会再来住 每次家里人来医院都过来住 卫生服务都很好 服务人员很热情 有家一样的感觉",
          origin: "携程",
          date: new Date(),
        },
        {
          text: "设施齐全 服务特别好 感觉这里非常不错 环境很好 住了很久了 离六院很近 比较方便",
          origin: "携程",
          date: new Date(),
        },
        {
          text: "家里人身体不好 在医院住院 楼上有小厨房跟洗衣机 外面有大阳台晒衣服 因为每天都在医院里面照顾 衣服有时候晒在外面下雨了 酒店都会帮忙把衣服收进去 老板娘真的很热情 很好说话 非常推荐来入住",
          origin: "携程",
          date: new Date(),
        },
        {
          text: "4.1号去看张杰演唱会订的 因为场馆附近的抢票那天都预订完了 这个地方离地铁也蛮近 走路10分钟左右可以到 一开始预订没注意看 入住那天才发现没窗 有一种难受窒息感 找前台换了有窗的 加收了30 不太好一点是 洗手台那个水龙头🚰口很锋利 直接给我手划了一个口子 …",
          origin: "携程",
          date: new Date(),
        },
        {
          text: "携程上兑换了免费升级，延迟退房，前台都说不不不。然后枕头一看就是很久没换枕套。不隔音，其他房间有人呕吐，就好像在你床头吐。但是，楼层服务员大姐很热心。6院看病可以住一夜……真的，就一夜……",
          origin: "携程",
          date: new Date(),
        },
        {
          text: "酒店离六院很近 周边吃的很多 服务很好 酒店卫生很好",
          origin: "携程",
          date: new Date(),
        },
        {
          text: "酒店环境不错 下次还会再来住 每次家里人来医院都过来住 卫生服务都很好 服务人员很热情 有家一样的感觉",
          origin: "携程",
          date: new Date(),
        },
        {
          text: "设施齐全 服务特别好 感觉这里非常不错 环境很好 住了很久了 离六院很近 比较方便",
          origin: "携程",
          date: new Date(),
        },
        {
          text: "家里人身体不好 在医院住院 楼上有小厨房跟洗衣机 外面有大阳台晒衣服 因为每天都在医院里面照顾 衣服有时候晒在外面下雨了 酒店都会帮忙把衣服收进去 老板娘真的很热情 很好说话 非常推荐来入住",
          origin: "携程",
          date: new Date(),
        },
        {
          text: "4.1号去看张杰演唱会订的 因为场馆附近的抢票那天都预订完了 这个地方离地铁也蛮近 走路10分钟左右可以到 一开始预订没注意看 入住那天才发现没窗 有一种难受窒息感 找前台换了有窗的 加收了30 不太好一点是 洗手台那个水龙头🚰口很锋利 直接给我手划了一个口子 …",
          origin: "携程",
          date: new Date(),
        },
        {
          text: "携程上兑换了免费升级，延迟退房，前台都说不不不。然后枕头一看就是很久没换枕套。不隔音，其他房间有人呕吐，就好像在你床头吐。但是，楼层服务员大姐很热心。6院看病可以住一夜……真的，就一夜……",
          origin: "携程",
          date: new Date(),
        },
        {
          text: "酒店离六院很近 周边吃的很多 服务很好 酒店卫生很好",
          origin: "携程",
          date: new Date(),
        },
      ],
      data1: [
        {
          subtitle: "合作120家（120/180）",
          top: "25%",
          data: { name: "A级商户合作率", value: 75, color: "#0E4CFF" },
        },
        {
          subtitle: "合作100家（100/200）",
          top: "41%",
          data: { name: "B级商户合作率", value: 50, color: "#B405FD" },
        },
        {
          subtitle: "合作100家（100/170）",
          top: "58%",
          data: { name: "C级商户合作率", value: 41.2, color: "#FE9900" },
        },
        {
          subtitle: "合作134家（134/214）",
          top: "74%",
          data: { name: "D级商户合作率", value: 62.6, color: "#FF6600" },
        },
        {
          subtitle: "合作40家（40/230）",
          top: "90%",
          data: { name: "E级商户合作率", value: 17.4, color: "#7F05FD" },
        },
      ],
      data3: [
        {
          subtitle: "675人（2345次/4533元）",
          top: "29%",
          data: { name: "红包转账", value: 45, color: "#0E4CFF" },
        },
        {
          subtitle: "675人（2345次/4533元）",
          top: "54%",
          data: { name: "访问涉赌应用", value: 60, color: "#FE9900" },
        },
        {
          subtitle: "675人（2345次/4533元）",
          top: "78%",
          data: { name: "使用炒股应用", value: 12, color: "#7F05FD" },
        },
      ],
      data2: [
        // 各级商户排名数据
        {
          top: "16%",
          color: "14,73,245",
          data: [
            { name: "广州文华东方酒店", value: 10 },
            { name: "壹米酒店", value: 9 },
            { name: "家外家连锁酒店", value: 8 },
            { name: "广州卓美亚酒店 ", value: 7 },
            { name: "广州柏悦酒店 ", value: 6 },
            { name: "广州瑰丽府邸 ", value: 5 },
            { name: "广州德安丽舍凯宾斯基酒店", value: 4 },
            { name: "广州嘉逸国际酒店 ", value: 3 },
            { name: "广州保利洲际酒店 ", value: 2 },
            { name: "广州宝德国际酒店", value: 1 },
          ],
        },
        {
          top: "33%",
          color: "170,6,243",
          data: [
            { name: "广州同裕国际酒店 ", value: 10 },
            { name: "广州香格里拉大酒店", value: 9 },
            { name: "广州希尔顿逸林酒店", value: 8 },
            { name: "广州伊士丹顿酒店", value: 7 },
            { name: "广州东圃合景福朋喜来登酒店", value: 6 },
            { name: "广州翡翠希尔顿酒店", value: 5 },
            { name: "广州富力君悦大酒店", value: 4 },
            { name: "广州卓美亚礼庭公寓 ", value: 3 },
            { name: "广州生物岛高新木莲庄酒店", value: 2 },
            { name: "美豪丽致酒店(广州东站店)", value: 1 },
          ],
        },
        {
          top: "50%",
          color: "254,153,0",
          data: [
            { name: "广州天河体育中心美居酒店", value: 10 },
            { name: "广州马会酒店", value: 9 },
            { name: "广州山庄旅舍 ", value: 8 },
            { name: "珠光星御国际公寓", value: 7 },
            { name: "榆漫居行政公寓", value: 6 },
            { name: "友和酒店", value: 5 },
            { name: "广州长洲岛鸿境红棉花院", value: 4 },
            { name: "广州静谧坊酒店(天河智慧城店)", value: 3 },
            { name: "广州丽柏国际酒店(珠江新城岗顶地铁站店) ", value: 2 },
            { name: "广州远洋宾馆", value: 1 },
          ],
        },
        {
          top: "67%",
          color: "255,102,0",
          data: [
            { name: "怡程酒店", value: 10 },
            { name: "CityNote希诺酒店", value: 9 },
            { name: "广州威珀斯酒店", value: 8 },
            { name: "广州新珠江大酒店", value: 7 },
            { name: "柏曼酒店", value: 6 },
            { name: "广州珠江新城希尔顿欢朋酒店", value: 5 },
            { name: "广州京溪礼顿酒店", value: 4 },
            { name: "南洋冠盛酒店", value: 3 },
            { name: "广州克莱顿酒店", value: 2 },
            { name: "广州合晋帝苑酒店", value: 1 },
          ],
        },
        {
          top: "83%",
          color: "127,5,253",
          data: [
            { name: "锦鑫商务宾馆", value: 10 },
            { name: "文星酒店", value: 9 },
            { name: "美夜酒店", value: 8 },
            { name: "乔斯顿电竞酒店", value: 7 },
            { name: "宏森公寓", value: 6 },
            { name: "广州佳乐商务酒店", value: 5 },
            { name: "7天优品酒店", value: 4 },
            { name: "益粮智能公寓", value: 3 },
            { name: "吉星精品酒店", value: 2 },
            { name: "信捷酒店公寓", value: 1 },
          ],
        },
      ],
      data4: [
        {
          top: "30%",
          color: "14,73,245",
          data: [
            { name: "广州天河体育中心美居酒店", value: 10 },
            { name: "广州马会酒店", value: 9 },
            { name: "广州山庄旅舍 ", value: 8 },
            { name: "珠光星御国际公寓", value: 7 },
            { name: "榆漫居行政公寓", value: 6 },
            { name: "友和酒店", value: 5 },
            { name: "广州长洲岛鸿境红棉花院", value: 4 },
            { name: "广州静谧坊酒店(天河智慧城店)", value: 3 },
            { name: "广州丽柏国际酒店(珠江新城岗顶地铁站店) ", value: 2 },
            { name: "广州远洋宾馆", value: 1 },
          ],
        },
        {
          top: "57%",
          color: "254,153,0",
          data: [
            { name: "怡程酒店", value: 10 },
            { name: "CityNote希诺酒店", value: 9 },
            { name: "广州威珀斯酒店", value: 8 },
            { name: "广州新珠江大酒店", value: 7 },
            { name: "柏曼酒店", value: 6 },
            { name: "广州珠江新城希尔顿欢朋酒店", value: 5 },
            { name: "广州京溪礼顿酒店", value: 4 },
            { name: "南洋冠盛酒店", value: 3 },
            { name: "广州克莱顿酒店", value: 2 },
            { name: "广州合晋帝苑酒店", value: 1 },
          ],
        },
        {
          top: "83%",
          color: "127,5,253",
          data: [
            { name: "锦鑫商务宾馆", value: 10 },
            { name: "文星酒店", value: 9 },
            { name: "美夜酒店", value: 8 },
            { name: "乔斯顿电竞酒店", value: 7 },
            { name: "宏森公寓", value: 6 },
            { name: "广州佳乐商务酒店", value: 5 },
            { name: "7天优品酒店", value: 4 },
            { name: "益粮智能公寓", value: 3 },
            { name: "吉星精品酒店", value: 2 },
            { name: "信捷酒店公寓", value: 1 },
          ],
        },
      ],
      data5: {
        title: "社会应用分析",
        position: ["5%", "14%"],
        center: ["50%", "60%"],
        indicator: [
          { text: "微信" },
          { text: "QQ" },
          { text: "微博" },
          { text: "陌陌" },
          { text: "INS" },
          { text: "抖音" },
        ],
        data: [
          {
            name: "安装量",
            color: "#0DE4EE",
            value: [100, 8, 0.4, -80, 2000, 345],
          },
          {
            name: "使用时长",
            color: "#0D88F3",
            value: [60, 5, 0.3, -100, 1500, 232],
          },
        ],
      },
      data6: {
        title: "涉军信息分析",
        position: ["5%", "14%"],
        center: ["50%", "60%"],
        indicator: [
          { text: "微信" },
          { text: "QQ" },
          { text: "SNS" },
          { text: "漂流瓶" },
          { text: "陌陌" },
          { text: "摇一摇" },
          { text: "INS" },
          { text: "抖音" },
        ],
        data: [
          {
            name: "个人信息涉军",
            color: "#6514FF",
            value: [100, 8, 0.4, -80, 2000, 345, 12, 654],
          },
          {
            name: "内容涉军",
            color: "#B370FD",
            value: [60, 5, 0.3, -100, 1500, 232, 432, 43],
          },
        ],
      },
      data7: {
        title: "交友方式分析",
        position: ["5%", "14%"],
        center: ["50%", "60%"],
        indicator: [
          { text: "面对面" },
          { text: "手机号" },
          { text: "手机联系人" },
          { text: "摇一摇" },
          { text: "微博" },
          { text: "微信" },
          { text: "名片" },
          { text: "快手" },
          { text: "INS" },
          { text: "扫一扫" },
          { text: "附近的人" },
          { text: "漂流瓶" },
        ],
        data: [
          {
            name: "主动",
            color: "#0096FE",
            value: [100, 8, 0.4, -80, 2000, 345, 123, 21, 34, 54, 431, 876],
          },
          {
            name: "被动",
            color: "#9EEAFF",
            value: [60, 5, 0.3, -100, 1500, 232, 78, 32, 567, 43, 765, 432],
          },
        ],
      },
      data8: {
        title: "群属性分析",
        position: ["5%", "14%"],
        center: ["50%", "60%"],
        indicator: [
          { text: "博彩群" },
          { text: "涉赌群" },
          { text: "营销群" },
          { text: "其他" },
          { text: "相亲群" },
          { text: "涉黄群" },
        ],
        data: [
          {
            name: "微信",
            color: "#FD9800",
            value: [100, 8, 0.4, -80, 2000, 345],
          },
          {
            name: "QQ",
            color: "#FDC673",
            value: [60, 5, 0.3, -100, 1500, 232],
          },
        ],
      },
      data9: {
        title: "重点关注用户",
        data: [
          {
            name: "个数",
            color: "#00CCFF",
            value: ["112", "212", "42", "232", "123", "67"],
          },
          {
            name: "使用时长",
            color: "#142AFE",
            value: ["112", "212", "42", "232", "123", "67"],
          },
        ],
      },
      data10: {
        title: "重点关注用户",
        data: [
          {
            name: "个人信息涉军应用个数",
            color: "#6514FF",
            value: ["112", "212", "42", "232", "123", "67"],
          },
          {
            name: "涉军内容条数",
            color: "#B370FD",
            value: ["112", "212", "42", "232", "123", "67"],
          },
        ],
      },
      data11: {
        title: "重点关注异常交友用户",
        data: [
          {
            name: "主动",
            color: "#05467D",
            value: ["112", "212", "42", "232", "123", "67"],
          },
          {
            name: "被动",
            color: "#52B8FF",
            value: ["112", "212", "42", "232", "123", "67"],
          },
        ],
      },
      data12: {
        title: "重点关注用户",
        data: [
          {
            name: "个数",
            color: "#FD9800",
            value: ["112", "212", "42", "232", "123", "67"],
          },
          {
            name: "使用时长",
            color: "#FDC673",
            value: ["112", "212", "42", "232", "123", "67"],
          },
        ],
      },
      pieData1: {
        // 饼图数据1
        title: "TOP数据1",
        color: "#2C7BFE",

        data: [
          {
            value: 60,
            name: "分类1",
            itemStyle: {
              color: "#1456FE",
            },
          },
          {
            value: 20,
            name: "分类2",
            itemStyle: {
              color: "#00CCFF",
            },
          },
          {
            value: 80,
            name: "分类3",
            itemStyle: {
              color: "#142AFE",
            },
          },
          {
            value: 40,
            name: "分类4",
            itemStyle: {
              color: "#1493FE",
            },
          },
          {
            value: 40,
            name: "分类5",
            itemStyle: {
              color: "#252448",
            },
          },
        ],
      },
      pieData2: {
        // 饼图数据1
        title: "TOP数据2",
        color: "#2C7BFE",

        data: [
          {
            value: 60,
            name: "分类1",
            itemStyle: {
              color: "#142AFE",
            },
          },
          {
            value: 20,
            name: "分类2",
            itemStyle: {
              color: "#1493FE",
            },
          },
          {
            value: 80,
            name: "分类3",
            itemStyle: {
              color: "#252448",
            },
          },
          {
            value: 40,
            name: "分类4",
            itemStyle: {
              color: "#00CCFF",
            },
          },
          {
            value: 40,
            name: "分类5",
            itemStyle: {
              color: "#1456FE",
            },
          },
        ],
      },
      pieData3: {
        // 饼图数据1
        title: "TOP数据3",
        color: "#2C7BFE",

        data: [
          {
            value: 60,
            name: "分类1",
            itemStyle: {
              color: "#1493FE",
            },
          },
          {
            value: 20,
            name: "分类2",
            itemStyle: {
              color: "#142AFE",
            },
          },
          {
            value: 80,
            name: "分类3",
            itemStyle: {
              color: "#1456FE",
            },
          },
          {
            value: 40,
            name: "分类4",
            itemStyle: {
              color: "#00CCFF",
            },
          },
          {
            value: 40,
            name: "分类5",
            itemStyle: {
              color: "#252448",
            },
          },
        ],
      },
      ringData1: {
        title: "男性用户分布",
        data: [
          {
            value: 335,
            name: "18-24",
            itemStyle: {
              color: "#252448",
            },
          },
          {
            value: 310,
            name: "25-34",
            itemStyle: {
              color: "#2ca8fe",
            },
          },
          {
            value: 234,
            name: "35-44",
            itemStyle: {
              color: "#feed2c",
            },
          },
          {
            value: 135,
            name: "其他",
            itemStyle: {
              color: "#2871ea",
            },
          },
          {
            value: 200,
            name: "45-54",
            itemStyle: {
              color: "#fe672c",
            },
          },
        ],
      },
      // 环形数据2
      ringData2: {
        title: "女性用户分布",
        data: [
          {
            value: 335,
            name: "18-24",
            itemStyle: {
              color: "#69f262",
            },
          },
          {
            value: 310,
            name: "25-34",
            itemStyle: {
              color: "#c0232a",
            },
          },
          {
            value: 234,
            name: "35-44",
            itemStyle: {
              color: "#2cfcfe",
            },
          },
          {
            value: 135,
            name: "其他",
            itemStyle: {
              color: "#252448",
            },
          },
          {
            value: 200,
            name: "45-54",
            itemStyle: {
              color: "#a262f2",
            },
          },
        ],
      },
      resizeFn: null,
    };
  },
  mounted() {
    this.resizeFn = this.$debounce(() => {
      // 通过捕获系统的onresize事件触发我们需要执行的事件
      this.$refs.channelBar1.setChart();
      this.$refs.distributionSolider1.setChart();
      this.$refs.channelBar2.setChart();
      this.$refs.distributionSolider2.setChart();
      //this.$refs.pies.setPies();
      //    this.$refs.redPocket.setPocket();
      this.$refs.webcastsRisk.setWebcasts();
      //    this.$refs.deviceSafeRisk.setDeviceSafe();
      this.$refs.ring1.drawRing();
      this.$refs.ring2.drawRing();
      this.$refs.ring3.drawRing();
      for (let i = 1; i < 9; i++) {
        this.$refs["chart" + i].setChart();
      }
      //    this.$refs.chinaMap.setMap();
      this.$refs.hotWords.setChart();
    }, 500);
    window.addEventListener("resize", this.resizeFn);
  },
  methods: {
    handleSelect(name) {
      switch (name) {
        case "home":
          this.activeName = name;
          break;
        case "detail":
          this.activeName = name;
          break;
        default:
          break;
      }
    },
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resizeFn);
  },
};
</script>

<style lang="less" scoped>
// .chart-68 {
//   width: 68%;
//   height: 100%;
//   float: left;
// }
.page3 {
  height: 100%;
  width: 100%;
  padding: 14px 20px 20px;
  background: #03044a;
  overflow: hidden;
  .ivu-col {
    height: 100%;
    float: left;
  }
  .left,
  .right1-1,
  .center-top,
  .center-bottom {
    height: 100%;
    border: 1px solid #0d2451;
    position: relative;
    background: #151456;

    #left_5 {
      height: 100%;
      width: 45%;
      float: left;
    }

    #left_6 {
      height: 100%;
      width: 55%;
      float: left;
    }

    .circular {
      height: 100%;

      .canvas {
        height: 100%;
        width: 30%;
        float: left;

        .subtitle {
          font-size: 12px;
          font-weight: bold;
          color: #fff;
          height: 25px;
          padding: 10px 0;
          text-align: center;
        }

        .canvasList {
          height: calc(~"100% - 25px");
          text-align: center;
          margin-top: 15px;
        }
      }
    }

    .left1 {
      border-bottom: 1px solid #0d2451;
      background: #151456;
    }
    .title {
      position: absolute;
      display: inline-block;
      color: #6eddf1;
      border: 2px solid #6eddf1;
      height: 18px;
      padding: 0 2px;
      left: 50%;
      transform: translate(-50%, -50%);

      .title-text {
        position: relative;
        font-size: 16px;
        background: #09102e;
        display: inline-block;
        padding: 0 4px;
        transform: translateY(-5px);
      }
    }
  }

  .center-top {
    height: 60%;
  }

  .center-bottom {
    height: 40%;

    .bottom-radars {
      height: 55%;
    }

    .bottom-bars {
      height: 45%;
    }
  }

  .right-1 {
    height: 40%;

    .right1-1 {
      height: 92%;
    }
  }

  .right-2 {
    height: 60%;
  }
  .ring-container {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr; /* 左右分布 */
    gap: 20px; /* 可选，设置间距 */
  }
  .list {
    width: 100%;
    height: 100%;
    float: left;
  }
}
</style>
